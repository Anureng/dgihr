const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const verify = require('../middleware/authMiddleware');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/profile', verify, auth.getProfile);
router.put('/profile', verify, auth.updateProfile);
router.put('/change-password', verify, auth.changePassword);

module.exports = router;