// routes/api/orders.js

const express = require('express');
const router = express.Router();
const contactCtrl = require('../../controllers/contacts');

// Route handler for POSTing a new order. Full address will be POST /api/orders
router.post('/', contactCtrl.create)

module.exports = router;