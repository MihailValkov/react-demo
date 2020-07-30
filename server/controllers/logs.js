const LogsModel = require('../models/Logs');

module.exports= {

    get : {
        logs(req,res,next) {
            LogsModel.find().lean()
            .then((logs) => res.send(logs))
            .catch(next)
        }
    }
}