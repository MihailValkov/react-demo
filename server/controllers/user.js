const userModel = require('../models/User');
const jwt = require('../utils/jwt');
const renderMessage = require('../utils/error-handler');

module.exports= {
    get : {
        allUsers(req,res,next) {
            userModel.find()
            .then((users) => res.send(users))
            .catch(next)
        },
        user (req,res,next) {
            const {userId} = req.params;
            userModel.findById(userId)
            .then((user) => res.send(user))
            .catch(next)
        },
        auth (req,res,next) {
            const token = req.cookies[process.env.AUTH_COOKIE] || '';
            const user = jwt.verify(token, process.env.SECRET);
                if(!user) { res.status(401) ; return ;}
				userModel.findByIdAndUpdate({_id : req.user.id},{'userInfo.lastOnline' : new Date().toLocaleString()},{useFindAndModify : false})
                .then ( user => res.send(user))
                .catch(() => res.status(401) );
        },
        singlePost(req,res,next) {

        },
        allPosts(req,res,next) {
            userModel.findById(req.user.id)
            .then(({posts}) => res.send(posts))
            .catch(next)
        }
    },
    post : {
       async register(req,res,next){
            const { email , username, password, confirmPassword ,gender} = req.body;
            const userInfo ={
                registerDate :new Date().toLocaleString(),
                lastOnline:new Date().toLocaleString(),
                sex : gender === 'male' ? "M" : "F",
                userImage : gender === "male" ? process.env.MALE : process.env.FEMALE,
                status : 'Member',
                profession : 'Works at',companyName : '',liveInCity: '',coverImage : ''
            }
            if(password !== confirmPassword) {
                 res.status(401).send({message:"Password and repeat password don't match!"});return;
                }
                try {

                   const user = await userModel.create({username,password,email,userInfo});
                    res.status(201).send({id : user._id});
                } catch (error) {
                    renderMessage(error,res,next);
                }
        },
       async login(req,res,next){
            const {password,email}= req.body;
			
			if (!password || !email) {res.status(401).send({message:"Please fullfil all fields"}); return;}
            try {
                const user=await userModel.findOne({email});
                if(!user) {
                    res.status(401).send({message:"Email address don't exist!"});
                    return;
                }
               const match = await user.checkPasswords(password);
               if(!match) {
                res.status(401).send({ message:"Email address or password is not valid!" });
                    return;
                }
                const token = await jwt.create({id:user._id, username :user.username});
				await userModel.findByIdAndUpdate({_id : user._id},{'userInfo.lastOnline' : new Date().toLocaleString()},{useFindAndModify : false})
                res.cookie(process.env.AUTH_COOKIE,token).status(200).send({id : user._id, username :user.username});    
            } catch (error) {
                next();
            }

        },
            logout (req,res,next){
            res.clearCookie(process.env.AUTH_COOKIE).status(200).send({message :"Logout successfully!"});
        },
		    delete(req,res,next) {
				const {userId} = req.params;
				userModel.findByIdAndDelete(userId)
					.then((user) => {
                        LogsModel.findOneAndUpdate("deletedUsers", {$addToSet : {deletedUsers: {admin : req.user.username, deletedUser:user, time : new Date().toLocaleString()}}},{useFindAndModify : false})
                        .then((response)=> {
                            res.status(200).send({message : 'User deleted successfully'})
                        })
					})
					.catch(next)
				
        },
            editProfile (req,res,next) {
                const {userId} = req.params;
                const { coverImage, userImage ,profession , companyName ,liveInCity ,username }= req.body;
                const coverImageChange = coverImage ? {'userInfo.coverImage': coverImage } : null;
                const userImageChange = userImage ? {'userInfo.userImage': userImage } : null;
                if ( coverImage || userImage  ) {
                    userModel.findByIdAndUpdate({_id : userId}, coverImageChange || userImageChange ,
                    {useFindAndModify : false , new: true}).lean()
                        .then ( user => {res.send(user)})
                        .catch(() => res.status(401) );
                
                } else {
                    userModel.findByIdAndUpdate({_id : userId},
                        {'userInfo.profession' : profession, 'userInfo.companyName' : companyName , 'userInfo.liveInCity' : liveInCity ,'username' : username } , {useFindAndModify : false , new: true}).lean()
                        .then ( user => {
                            res.send(user)
                        })
                        .catch(() => res.status(401) );

                }

        }
            
    }
    

}