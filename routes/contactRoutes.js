const express = require('express');
const contactConttoller = require('../controller/contactController');

const router = express.Router();

router.route('/')
.post(contactConttoller.submitMessage);

module.exports = router;