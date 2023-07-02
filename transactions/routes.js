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

// GET /veiculos/find?q=termo
router.get('/veiculos/find', (req, res) => {
    const term = req.query.q.toLowerCase();
    const filteredVehicles = vehiclesInstance.getFilteredVehicles(term);
    
    res.json(filteredVehicles);
});

// GET /veiculos/:id
router.get('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = vehiclesInstance.getVehicleById(id);
    
    if (vehicle) {
        res.json(vehicle);
    } else {
        res.status(404).json({ error: 'Veículo não encontrado.' });
    }
});



module.exports = router;
