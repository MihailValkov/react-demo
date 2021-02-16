const mongoose = require('mongoose');

const joinedEventsSchema= new mongoose.Schema({
    eventTitle :  { type : String },
    eventImage :  { type : String },
    eventFullDate :  { type : String },
    joinedFriends :  [ {type : mongoose.Schema.Types.ObjectId , ref : "User"}]
});

module.exports = mongoose.model('JoinedEvents', joinedEventsSchema)


