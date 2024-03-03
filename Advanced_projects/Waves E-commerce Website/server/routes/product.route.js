const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productsController = require('../controllers/products.controller');

router.post('/', auth('createAny', 'product'), productsController.addProduct )


module.exports = router;