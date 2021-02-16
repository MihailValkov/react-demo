const mongoose = require('mongoose');

const commentSchema= new mongoose.Schema({
    username : { type : String },
    createdAt : { type : String },
    comment : { type : String },
    userImage : { type : String }
});

module.exports = mongoose.model('Comment', commentSchema)


