const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  images: [String],
  brand: String,
  sku: { type: String, unique: true },
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  isActive: { type: Boolean, default: true },
  weight: Number,
  dimensions: {
    length: Number,
    width: Number,
    height: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);