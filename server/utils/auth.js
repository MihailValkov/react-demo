const jwt = require('./jwt');
module.exports = (needAccess=true) => {
    return function(req,res,next) {
        const token = req.cookies[process.env.AUTH_COOKIE] || '';
        const user = jwt.verify(token, process.env.SECRET);
        if(!user) {
            if(!needAccess) {
                next();return;
            }
            res.status(401).send('UNAUTHORIZED!');
        }
        req.user= user;
        next();
    }
}