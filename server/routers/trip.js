const router = require('express').Router();
const auth = require('../utils/auth');
const controller = require('../controllers/trip');

router.get('/all',auth(true),controller.get.allTrips );
router.get('/details/:tripId',auth(true),controller.get.details);

router.post('/create',auth(true),controller.post.create );
router.post('/join/:tripId',auth(true),controller.post.join );


module.exports= router;