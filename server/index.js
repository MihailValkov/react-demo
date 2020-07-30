require('dotenv').config();
const config = require('./config/config')[process.env.NODE_ENV];
const database = require('./config/db');
const app = require('express')();

database().then(()=> {

    require('./config/express')(app);
    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });
   
    app.listen(config.port, console.log(`Server is listening on port : ${config.port}`));
})