const userModel = require('../models/User');
const LogsModel = require('../models/Logs');
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
            const token = req.cookies['auth-cookie'] || '';
            const user = jwt.verify(token, process.env.SECRET);
                if(!user) { res.status(401) ; return ;}
				userModel.findByIdAndUpdate({_id : req.user.id},{'userInfo.lastOnline' : new Date().toLocaleString()},{useFindAndModify : false})
                .then ( user => res.send(user))
                .catch(() => res.status(401) );
        } 
    },
    post : {
       async register(req,res,next){
            const {username, password, repeatPassword,sex} = req.body;
            const userInfo ={registerDate :new Date().toLocaleString(),lastOnline:new Date().toLocaleString()}
            if(password !== repeatPassword) {
                 res.status(401).send({message:"Password and repeat password don't match!"});return;
                }
                try {
                   const userImage = sex === "male" ? process.env.MALE : process.env.FEMALE;
                   const user = await userModel.create({username,password,userImage, userInfo});
                    res.status(201).send({id : user._id});
                } catch (error) {
                    renderMessage(error,res,next);
                }
        },
       async login(req,res,next){
            const {username,password}= req.body;

            try {
                const user=await userModel.findOne({username});
                if(!user) {
                    res.status(401).send({message:"Username don't exist!"});
                    return;
                }
               const match = await user.checkPasswords(password);
               if(!match) {
                res.status(401).send({ message:"Username or password is not valid!" });
                    return;
                }
                const token = await jwt.create({id:user._id, username :user.username});
				await userModel.findByIdAndUpdate({_id : user._id},{'userInfo.lastOnline' : new Date().toLocaleString()},{useFindAndModify : false})
                res.cookie('auth-cookie',token).status(200).send({id : user._id, username :user.username});    
            } catch (error) {
                next();
            }

           },
           logout (req,res,next){
            res.clearCookie('auth-cookie').status(200).send({message :"Logout successfully!"});
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
				
			}
    }
    

}