const mongoose = require('mongoose');

const postsSchema= new mongoose.Schema({
    createdAt : { type : String },
    creator : { type : String },
    title : { type : String },
    pictures : { type : Array },
    likes : { type : Array },
    comments :  [ {type : mongoose.Schema.Types.ObjectId , ref : "Comment"}]
});

module.exports = mongoose.model('Posts', postsSchema)


