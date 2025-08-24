const generateSKU = (productName, category) => {
  const prefix = category ? category.substring(0, 3).toUpperCase() : 'PRD';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

const calculateShipping = (weight, distance, shippingMethod = 'standard') => {
  const baseRate = 5;
  const weightMultiplier = weight * 0.5;
  const distanceMultiplier = distance * 0.01;
  
  let methodMultiplier = 1;
  switch (shippingMethod) {
    case 'express':
      methodMultiplier = 2;
      break;
    case 'overnight':
      methodMultiplier = 3;
      break;
    default:
      methodMultiplier = 1;
  }
  
  return Math.round((baseRate + weightMultiplier + distanceMultiplier) * methodMultiplier * 100) / 100;
};

const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

const paginate = (query, page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  return query.skip(offset).limit(parseInt(limit));
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

module.exports = {
  generateSKU,
  calculateShipping,
  formatPrice,
  paginate,
  validateEmail,
  generateOrderNumber,
};