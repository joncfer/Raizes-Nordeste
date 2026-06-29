const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  items: {
    type: DataTypes.JSON,
    allowNull: false
  },
  unidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  statusPagamento: {
    type: DataTypes.ENUM('APROVADO', 'RECUSADO', 'PENDENTE'),
    defaultValue: 'PENDENTE'
  },
  statusPedido: {
    type: DataTypes.ENUM('EM PREPARO', 'PRONTO', 'ENTREGUE', 'CANCELADO'),
    defaultValue: 'EM PREPARO'
  },
  consentimentoLGPD: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Pedidos'
});

module.exports = Pedido;

