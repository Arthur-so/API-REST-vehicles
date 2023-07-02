const express = require('express');
const router = express.Router();
const Vehicles = require('../data/vehicles');

const vehiclesInstance = new Vehicles();

router.get('/', (req, res) => {
    res.send('Bem-vindo à API de Cadastro de Veículos!');
  });

  module.exports = router;
