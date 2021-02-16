const PostsModel = require('../models/Posts');
const UserModel = require('../models/User')

module.exports= {

    get : {
        singlePost(req,res,next) {
            const { postId }= req.params;
            PostsModel.findById(postId).populate('comments').lean()
            .then(post => res.send(post))
            .catch(next)
        },
        allPosts (req,res,next) {
            PostsModel.find().lean()
            .then(posts => res.send(posts))
            .catch(next)
        }
    },
    post : {
        async create(req,res,next) {
            const {creator,title ,pictures} = req.body;
            console.log(req.body)
            // TODO:pictures?
            try {
                const post = await PostsModel.create({creator,title ,createdAt : new Date().toLocaleString()  });
                await UserModel.findByIdAndUpdate({_id:req.user.id},{$addToSet : {posts : post._id}},{useFindAndModify : false,  new: true})
                 res.status(201).send(post);
             } catch (error) {
                 console.log(error)
             }

        },
        edit(req,res,next) {
            const { postId } = req.params;
            const { username ,like ,disLike,title } = req.body;
            if(like) {
                PostsModel.findByIdAndUpdate({_id:postId},{$addToSet : {likes : username}},{useFindAndModify :false,new: true})
                .then(post => res.send(post.likes))
            } 
            if(disLike) {
                PostsModel.findByIdAndUpdate({_id:postId},{$pull : {likes : username}},{useFindAndModify :false,new: true})
                .then(post => res.send(post.likes))
            } 
            if(title) {
                PostsModel.findByIdAndUpdate({_id:postId},{title},{useFindAndModify :false,new: true})
                .then(post => res.send(post.title))
            } 
            

        },
        delete (req,res,next) {
            const { postId } = req.params;
            PostsModel.findByIdAndRemove(postId).then(deletedPost => {
                UserModel.findByIdAndUpdate({_id:req.user.id},{$pull : {posts : postId}},{useFindAndModify :false,new: true})
                .then(()=> res.send(deletedPost) )
            }) 
        }
    }
}