const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');
const verify = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.post('/', verify, order.createOrder);
router.get('/', verify, order.getOrders);
router.get('/:id', verify, order.getOrderById);
router.put('/:id/status', verify, admin, order.updateOrderStatus);
router.put('/:id/cancel', verify, order.cancelOrder);

module.exports = router;