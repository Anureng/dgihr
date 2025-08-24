const Review = require('../models/Review');
const Product = require('../models/Product');

exports.createReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    
    // Check if user already reviewed this product
    const existingReview = await Review.findOne({ user: req.user.id, product: productId });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product' });
    }
    
    const review = await Review.create({
      user: req.user.id,
      product: productId,
      rating,
      comment
    });
    
    // Update product rating
    const reviews = await Review.find({ product: productId });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    
    await Product.findByIdAndUpdate(productId, {
      'ratings.average': avgRating,
      'ratings.count': reviews.length
    });
    
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};