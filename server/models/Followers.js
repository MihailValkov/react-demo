const mongoose = require('mongoose');

const followersSchema= new mongoose.Schema({
    followers :  [ {type : mongoose.Schema.Types.ObjectId , ref : "User"}]
});

module.exports = mongoose.model('Followers', followersSchema)


