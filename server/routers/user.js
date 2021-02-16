const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/user')

router.get('/auth',auth(),controller.get.auth);
router.get('/posts',auth(),controller.get.allPosts);

router.post('/register',auth(false),controller.post.register);
router.post('/login',auth(false),controller.post.login);
router.post('/logout',auth(),controller.post.logout);

router.post('/edit-profile/:userId',auth(),controller.post.editProfile);


module.exports= router;



// router.get('/get-allUsers',auth(),controller.get.allUsers);
// router.get('/get-user/:userId',auth(),controller.get.user);

// router.post('/delete/:userId',auth(),controller.post.delete);