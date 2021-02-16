const mongoose = require('mongoose');

const friendsSchema= new mongoose.Schema({
    friends : [ {type : mongoose.Schema.Types.ObjectId , ref : "User"}]
});

module.exports = mongoose.model('Friends', friendsSchema)


