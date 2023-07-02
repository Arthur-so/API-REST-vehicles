const express = require('express');
const app = express();
const routes = require('./transactions/routes'); // Importe o arquivo de rotas

// Middleware para analise JSON
app.use(express.json());

// Defina o uso das rotas
app.use('/', routes);

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});