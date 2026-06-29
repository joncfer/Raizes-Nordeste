const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const pedidoController = require('../controllers/pedidoController');
const verifyToken = require('../middleware/auth');
const { validateLogin } = require('../middleware/validation');

router.post('/login', validateLogin, authController.login);
router.post('/login', authController.login);
router.post('/pedidos', verifyToken, pedidoController.criarPedido);
router.get('/pedidos/:id', verifyToken, pedidoController.buscarPedido);

module.exports = router;
