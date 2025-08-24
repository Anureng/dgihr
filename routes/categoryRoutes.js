const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');
const verify = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.post('/', verify, admin, category.createCategory);
router.get('/', category.getCategories);
router.get('/:id', category.getCategoryById);
router.put('/:id', verify, admin, category.updateCategory);
router.delete('/:id', verify, admin, category.deleteCategory);

module.exports = router;