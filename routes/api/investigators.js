const express = require('express');
const router = express.Router();
const investigatorsCtrl = require('../../controllers/api/investigators');

// GET /api/investigators
router.get('/', investigatorsCtrl.index);
// GET /api/investigators/:id
router.get('/:id', investigatorsCtrl.show);

module.exports = router;