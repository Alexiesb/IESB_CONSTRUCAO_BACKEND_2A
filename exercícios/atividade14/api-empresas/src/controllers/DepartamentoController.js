const DepartamentoModel = require('../models/DepartamentoModel');

class DepartamentoController {
    static async create(req, res) {
        try {
            const departamento = new DepartamentoModel(req.body);
            await departamento.save();
            res.status(201).json(departamento);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const departamentos = await DepartamentoModel.find();
            res.status(200).json(departamentos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const departamento = await DepartamentoModel.findById(req.params.id);
            if (!departamento) {
                return res.status(404).json({ message: 'Departamento not found' });
            }
            res.status(200).json(departamento);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const departamento = await DepartamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!departamento) {
                return res.status(404).json({ message: 'Departamento not found' });
            }
            res.status(200).json(departamento);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const departamento = await DepartamentoModel.findByIdAndDelete(req.params.id);
            if (!departamento) {
                return res.status(404).json({ message: 'Departamento not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = DepartamentoController;