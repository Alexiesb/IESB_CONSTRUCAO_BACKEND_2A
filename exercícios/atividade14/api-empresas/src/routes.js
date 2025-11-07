const express = require('express');
const CargoController = require('./controllers/CargoController');

const router = express.Router();
const cargoController = new CargoController();

router.get('/cargos', (req, res) => cargoController.findAll(req, res));
router.post('/cargos', (req, res) => cargoController.create(req, res));

module.exports = router;