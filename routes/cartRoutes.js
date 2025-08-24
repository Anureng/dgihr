const express = require('express');
const router = express.Router();
const cart = require('../controllers/cartController');
const verify = require('../middleware/authMiddleware');

router.get('/', verify, cart.getCart);
router.post('/add', verify, cart.addToCart);
router.put('/item/:productId', verify, cart.updateCartItem);
router.delete('/item/:productId', verify, cart.removeFromCart);
router.delete('/clear', verify, cart.clearCart);

module.exports = router;