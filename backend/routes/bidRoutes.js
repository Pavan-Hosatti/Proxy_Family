// routes/bidRoutes.js
// Bidding System Implementation: V1.2 - Stable Bidding Logic
// ============================================
const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

// All bidding routes
router.post('/place', bidController.placeBid);
router.get('/project/:projectId', bidController.getBidsForProject);
router.patch('/:bidId/award', bidController.markBidAsAwarded);

module.exports = router;
