const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/logs')



router.get('/logs',auth(),controller.get.logs);


module.exports= router;