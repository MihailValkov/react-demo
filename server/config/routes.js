const routes = require('../routers')

module.exports= (app) => {

    app.use('/user', routes.user);
	

    // app.use('/trip', routes.trip);
	// app.use('/admin', routes.log);


}