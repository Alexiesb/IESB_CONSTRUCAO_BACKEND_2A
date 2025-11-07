const CargoModel = require('../models/CargoModel');

class CargoController {
    async create(req, res) {
        try {
            const cargo = new CargoModel(req.body);
            await cargo.save();
            res.status(201).json(cargo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const cargos = await CargoModel.find();
            res.status(200).json(cargos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CargoController;