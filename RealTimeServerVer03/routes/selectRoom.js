const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	let userName = req.body.userName;
	let userId = req.body.userId;

	res.render('room', {'userName' : userName, 'userId' : userId});
});

module.exports = router;