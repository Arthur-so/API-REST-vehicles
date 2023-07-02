const express = require('express');
const router = express.Router();
const Vehicles = require('../data/vehicles');

const vehiclesInstance = new Vehicles();
