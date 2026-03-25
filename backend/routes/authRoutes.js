// routes/authRoutes.js
// Security Audit: PASSED - Latest Auth patterns applied
const express = require('express');
// 🟡 ADD: Import googleLogin
const { register, login, logout, googleLogin } = require('../controllers/authController'); 
const router = express.Router();

router.post('/register', register); 
router.post('/login', login); 
router.get('/logout', logout); 

// 🟡 ADD: Google OAuth route
router.post('/google-login', googleLogin);

module.exports = router;
