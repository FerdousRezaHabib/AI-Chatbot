// const express = require('express');
// const aiController = require('../controllers/ai.control');

// const router = express.Router();

// router.get("/get-response", aiController.getResponse);

// module.exports = router;

// src/routes/ai.routes.js
const express = require('express');
const { getResponse } = require('../controllers/ai.control');

const router = express.Router();

// use POST so we can send a JSON body
router.post('/get-response', getResponse);

module.exports = router;
