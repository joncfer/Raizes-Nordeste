const sqlite3 = require('sqlite3').verbose();
// Caminho relativo direto, já que ambos estão na raiz
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  // Tabela principal de Pedidos
  db.run(`CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clienteId INTEGER NOT NULL,
    total REAL NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de Itens do Pedido
  db.run(`CREATE TABLE IF NOT EXISTS itens_pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pedidoId INTEGER,
    produto TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    precoUnitario REAL NOT NULL,
    FOREIGN KEY(pedidoId) REFERENCES pedidos(id)
  )`, (err) => {
    if (err) {
      console.error('Erro ao criar tabelas:', err.message);
    } else {
      console.log('✅ Banco de dados inicializado: tabelas "pedidos" e "itens_pedido" criadas.');
    }
    db.close();
  });
});

