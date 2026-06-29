const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conexão com o banco (mesma lógica do model, mas centralizada no service para este exemplo)
const db = new sqlite3.Database(path.resolve(__dirname, '../database.sqlite'));

class PedidoService {
  async criarPedido(dadosPedido) {
    const { clienteId, itens, total } = dadosPedido;
    
    return new Promise((resolve, reject) => {
      // Simplificação: salvando apenas o resumo do pedido para evitar complexidade de SQL múltiplo agora
      const sql = `INSERT INTO pedidos (cliente_id, total, status, created_at) VALUES (?, ?, 'PENDENTE', datetime('now'))`;
      
      db.run(sql, [clienteId, total], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: this.lastID,
            clienteId,
            total,
            status: 'PENDENTE'
          });
        }
      });
    });
  }

  async listarPedidos() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM pedidos ORDER BY created_at DESC", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
}

module.exports = new PedidoService();
