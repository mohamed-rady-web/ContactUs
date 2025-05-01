const express = require('express');
const router = express.Router();
const coController= require('../Controllers/contactusController');

router.post('/contact-us/', coController.message);
module.exports = router;