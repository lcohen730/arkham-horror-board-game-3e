const express = require('express');
const router = express.Router();
const investigatorCtrl = require('../../controllers/api/investigators');

// GET /api/investigators
router.get('/', investigatorCtrl.index);
// GET /api/investigators/:id
router.get('/:id', investigatorCtrl.show);

module.exports = router;