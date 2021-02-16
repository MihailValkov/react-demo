const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/comment');

router.post('/create',auth(true),controller.post.create );


module.exports= router;