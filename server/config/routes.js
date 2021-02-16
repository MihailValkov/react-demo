const routes = require('../routers')

module.exports= (app) => {

    app.use('/user', routes.user);
    app.use('/posts', routes.posts);
    app.use('/comment', routes.comment);

	// app.use('/admin', routes.log);


}