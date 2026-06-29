const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Aponta para a raiz do projeto, independente de onde o app.js esteja
const dbPath = path.resolve(__dirname, '..', 'database.sqlite');
const db = new sqlite3.Database(dbPath);



const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='pedidos'", (err, row) => {
  if (err) console.error('Erro ao verificar banco:', err.message);
  else if (!row) console.warn('⚠️ Rode "node init_db.js" na raiz do projeto!');
  else console.log('✅ Tabelas prontas.');
});
app.use('/api/auth', authRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use(errorHandler);

module.exports = app;
