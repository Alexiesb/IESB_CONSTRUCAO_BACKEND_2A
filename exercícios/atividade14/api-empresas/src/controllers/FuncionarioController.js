const FuncionarioModel = require('../models/FuncionarioModel');
const Yup = require('yup');
const FuncionarioValidator = require('../validators/FuncionarioValidator');

class FuncionarioController {
    async create(req, res) {
        try {
            await FuncionarioValidator.createSchema.validate(req.body, { abortEarly: false });
            const funcionario = await FuncionarioModel.create(req.body);
            return res.status(201).json(funcionario);
        } catch (error) {
            return res.status(400).json({ errors: error.errors });
        }
    }

    async findAll(req, res) {
        try {
            const funcionarios = await FuncionarioModel.find().populate(['cargo', 'departamento']);
            return res.status(200).json(funcionarios);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving funcionarios' });
        }
    }

    async findById(req, res) {
        try {
            const funcionario = await FuncionarioModel.findById(req.params.id).populate(['cargo', 'departamento']);
            if (!funcionario) {
                return res.status(404).json({ message: 'Funcionario not found' });
            }
            return res.status(200).json(funcionario);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving funcionario' });
        }
    }

    async update(req, res) {
        try {
            await FuncionarioValidator.updateSchema.validate(req.body, { abortEarly: false });
            const funcionario = await FuncionarioModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!funcionario) {
                return res.status(404).json({ message: 'Funcionario not found' });
            }
            return res.status(200).json(funcionario);
        } catch (error) {
            return res.status(400).json({ errors: error.errors });
        }
    }

    async delete(req, res) {
        try {
            const funcionario = await FuncionarioModel.findByIdAndDelete(req.params.id);
            if (!funcionario) {
                return res.status(404).json({ message: 'Funcionario not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting funcionario' });
        }
    }
}

module.exports = new FuncionarioController();