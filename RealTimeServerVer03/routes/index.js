const express = require('express');
const router = express.Router();

const chatRouter = require('./chat');
const selectRoomRouter = require('./selectRoom');

router.use('/chat', chatRouter);
router.use('/select-room', selectRoomRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Enter Real-time talk'});
});

module.exports = router;