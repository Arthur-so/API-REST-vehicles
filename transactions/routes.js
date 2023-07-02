const express = require('express');
const router = express.Router();
const Vehicles = require('../data/vehicles');

const vehiclesInstance = new Vehicles();

router.get('/', (req, res) => {
    res.send('Bem-vindo à API de Cadastro de Veículos!');
  });

// GET /veiculos
router.get('/veiculos', (req, res) => {
    const allVehicles = vehiclesInstance.getAllVehicles();
    res.json(allVehicles);
});

module.exports = router;
