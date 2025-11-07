const ProjetoModel = require('../models/ProjetoModel');

class ProjetoController {
    async create(req, res) {
        try {
            const projeto = new ProjetoModel(req.body);
            await projeto.save();
            res.status(201).json(projeto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const projetos = await ProjetoModel.find();
            res.status(200).json(projetos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const projeto = await ProjetoModel.findById(req.params.id);
            if (!projeto) {
                return res.status(404).json({ message: 'Projeto não encontrado' });
            }
            res.status(200).json(projeto);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const projeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!projeto) {
                return res.status(404).json({ message: 'Projeto não encontrado' });
            }
            res.status(200).json(projeto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const projeto = await ProjetoModel.findByIdAndDelete(req.params.id);
            if (!projeto) {
                return res.status(404).json({ message: 'Projeto não encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProjetoController();