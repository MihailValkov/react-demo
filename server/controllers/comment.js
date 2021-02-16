const CommentModel = require("../models/Comment");
const PostsModel = require("../models/Posts");


module.exports = {
  get: {
    
  },
  post: {
        create(req, res, next) {
        const { username,userImage,comment,postId } = req.body;
        const createdAt= new Date().toLocaleString();
        CommentModel
            .create({username,userImage,comment,createdAt})
            .then((newComment) => {
                console.log('new', newComment)
                PostsModel.findByIdAndUpdate(postId,{$addToSet : {comments : newComment._id}},{useFindAndModify : false, new:true})
                .then(()=> {
                    res.status(200).send(newComment);
                })
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

};

