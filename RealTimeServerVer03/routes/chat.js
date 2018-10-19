const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	res.render('webTalk', {userName : req.body.userName, userId : req.body.userId, roomName : req.body.roomName});
});

module.exports = router;