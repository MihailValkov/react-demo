const mongoose = require('mongoose');

const createdEventsSchema= new mongoose.Schema({
    eventTitle :  { type : String },
    eventImage :  { type : String },
    eventFullDate :  { type : String },
    creator :  { type : String }
});

module.exports = mongoose.model('CreatedEvents', createdEventsSchema)


