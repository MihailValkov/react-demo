const mongoose = require('mongoose');

const logSchema= new mongoose.Schema({
    
	 deletedUsers : {
		type : Array
	}
});

module.exports = mongoose.model('Logs', logSchema)


