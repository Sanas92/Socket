var express = require('express');
var router = express.Router();

const chatRouter = require('./chat');

router.use('/chat', chatRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Enter Real-time talk'});
});

module.exports = router;
