const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.contoller');

router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.post('/isauth', authController.isauth);

module.exports = router;