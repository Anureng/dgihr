const express = require('express');
const router = express.Router();
const review = require('../controllers/reviewController');
const verify = require('../middleware/authMiddleware');

router.post('/product/:productId', verify, review.createReview);
router.get('/product/:productId', review.getProductReviews);
router.put('/:id', verify, review.updateReview);
router.delete('/:id', verify, review.deleteReview);

module.exports = router;