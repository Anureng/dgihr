# E-commerce API

A full-featured e-commerce backend API built with Node.js, Express, and MongoDB.

## Features

- 🔐 JWT Authentication & Authorization
- 👥 User Management with Roles
- 📦 Product Management with Categories
- 🛒 Shopping Cart Functionality
- 📋 Order Management System
- ⭐ Product Reviews & Ratings
- 💳 Payment Integration (Stripe)
- 📧 Email Notifications
- 🖼️ Image Upload (Cloudinary)
- 🚦 Rate Limiting
- 🛡️ Security Middleware
- ✅ Input Validation
- 🔍 Search & Filtering
- 📄 Pagination

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure your environment variables
4. Start the server: `npm run dev`

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile
- PUT `/api/auth/profile` - Update user profile
- PUT `/api/auth/change-password` - Change password

### Products
- GET `/api/products` - Get all products (with filtering, search, pagination)
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create product (Admin)
- PUT `/api/products/:id` - Update product (Admin)
- DELETE `/api/products/:id` - Delete product (Admin)
- GET `/api/products/search` - Search products

### Categories
- GET `/api/categories` - Get all categories
- GET `/api/categories/:id` - Get category by ID
- POST `/api/categories` - Create category (Admin)
- PUT `/api/categories/:id` - Update category (Admin)
- DELETE `/api/categories/:id` - Delete category (Admin)

### Shopping Cart
- GET `/api/cart` - Get user's cart
- POST `/api/cart/add` - Add item to cart
- PUT `/api/cart/item/:productId` - Update cart item quantity
- DELETE `/api/cart/item/:productId` - Remove item from cart
- DELETE `/api/cart/clear` - Clear entire cart

### Orders
- GET `/api/orders` - Get user's orders
- GET `/api/orders/:id` - Get order by ID
- POST `/api/orders` - Create order
- PUT `/api/orders/:id/status` - Update order status (Admin)
- PUT `/api/orders/:id/cancel` - Cancel order

### Reviews
- GET `/api/reviews/product/:productId` - Get product reviews
- POST `/api/reviews/product/:productId` - Create product review
- PUT `/api/reviews/:id` - Update review
- DELETE `/api/reviews/:id` - Delete review

## Environment Variables

See `.env` file for all required environment variables.

## License

MIT
