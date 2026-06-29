const express = require('express');
const router = express.Router();
const { criar, listar } = require('../controllers/pedidoController');
const verifyToken = require('../middleware/auth');

router.post('/', verifyToken, criar);
router.get('/', verifyToken, listar);

module.exports = router;
