const pedidoService = require('../services/pedidoService');

const criar = async (req, res, next) => {
  try {
    const { clienteId, itens } = req.body;
    const total = itens.reduce((acc, item) => acc + (item.quantidade * item.precoUnitario), 0);
    const novoPedido = await pedidoService.criarPedido({ clienteId, itens, total });
    res.status(201).json(novoPedido);
  } catch (err) {
    next(err);
  }
};

const listar = async (req, res, next) => {
  try {
    const pedidos = await pedidoService.listarPedidos();
    res.json(pedidos);
  } catch (err) {
    next(err);
  }
};

module.exports = { criar, listar };
