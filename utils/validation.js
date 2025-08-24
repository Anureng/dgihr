const Joi = require('joi');

const validateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().optional(),
    address: Joi.object({
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zipCode: Joi.string(),
      country: Joi.string(),
    }).optional(),
  });
  
  return schema.validate(data);
};

const validateProduct = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().max(1000).optional(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).default(0),
    category: Joi.string().optional(),
    images: Joi.array().items(Joi.string().uri()).optional(),
    brand: Joi.string().max(50).optional(),
    weight: Joi.number().min(0).optional(),
    dimensions: Joi.object({
      length: Joi.number().min(0),
      width: Joi.number().min(0),
      height: Joi.number().min(0),
    }).optional(),
  });
  
  return schema.validate(data);
};

const validateOrder = (data) => {
  const schema = Joi.object({
    shippingAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    paymentMethod: Joi.string().valid('card', 'paypal', 'stripe', 'cash').required(),
    notes: Joi.string().max(500).optional(),
  });
  
  return schema.validate(data);
};

const validateReview = (data) => {
  const schema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().max(500).optional(),
  });
  
  return schema.validate(data);
};

module.exports = {
  validateUser,
  validateProduct,
  validateOrder,
  validateReview,
};