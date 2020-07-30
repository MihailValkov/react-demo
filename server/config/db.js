const mongoose = require('mongoose');
const dbUrl = require('./config')[process.env.NODE_ENV]['database'];

module.exports = () => {
    return mongoose.connect(dbUrl,{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=> {
        if (err) { console.log('*** Something is wrong with DB! ***'); return;}
        console.log('Data base is connected !')
    })

}