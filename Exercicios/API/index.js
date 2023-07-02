const express = require('express');
const app = express();
const routes = require('./transactions/routes'); // Importe o arquivo de rotas

// Configurações e middleware do Express

app.use(express.json());

// Defina o uso das rotas
app.use('/', routes);

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});