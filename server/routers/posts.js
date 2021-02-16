const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/posts')

router.get('/:postId',auth(),controller.get.singlePost);
router.get('/all-posts',auth(),controller.get.allPosts);

router.post('/create',auth(),controller.post.create);
router.post('/edit/:postId',auth(),controller.post.edit);
router.post('/delete/:postId',auth(),controller.post.delete);


module.exports= router;