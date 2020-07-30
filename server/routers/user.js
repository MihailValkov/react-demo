const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/user')



router.get('/get-allUsers',auth(),controller.get.allUsers);
router.get('/get-user/:userId',auth(),controller.get.user);

router.get('/auth',auth(),controller.get.auth);


router.post('/register',auth(false),controller.post.register);
router.post('/login',auth(false),controller.post.login);
router.post('/logout',auth(),controller.post.logout);
router.post('/delete/:userId',auth(),controller.post.delete);

module.exports= router;