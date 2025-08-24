const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');
const verify = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.post('/', verify, admin, product.createProduct);
router.get('/', product.getProducts);
router.get('/search', product.searchProducts);
router.get('/:id', product.getProductById);
router.put('/:id', verify, admin, product.updateProduct);
router.delete('/:id', verify, admin, product.deleteProduct);

module.exports = router;