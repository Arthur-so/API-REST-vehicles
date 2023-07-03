const express = require('express');
const router = express.Router();
const Vehicles = require('../data/vehicles');

const vehiclesInstance = new Vehicles();

// TODO: testes unitários

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

// POST /veiculos
router.post('/veiculos', (req, res) => {
    const newVehicle = req.body;
    const createdVehicle = vehiclesInstance.addVehicle(newVehicle);
    res.status(201).json(createdVehicle);
});

// PUT /veiculos/:id
router.put('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedVehicle = req.body;
    const updatedVehicleResult = vehiclesInstance.updateVehicle(id, updatedVehicle);

    if (updatedVehicleResult) {
        res.json(updatedVehicleResult);
    } else {
        res.status(404).json({ error: 'Veículo não encontrado.' });
    }
});

// PATCH /veiculos/:id
router.patch('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFields = req.body;
    const patchedVehicle = vehiclesInstance.patchVehicle(id, updatedFields);
    
    if (patchedVehicle) {
        res.json(patchedVehicle);
    } else {
        res.status(404).json({ error: 'Veículo não encontrado.' });
    }
});

// DELETE /veiculos/:id
router.delete('/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedVehicle = vehiclesInstance.deleteVehicle(id);
    
    if (deletedVehicle) {
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: 'Veículo não encontrado.' });
    }
});

module.exports = router;
