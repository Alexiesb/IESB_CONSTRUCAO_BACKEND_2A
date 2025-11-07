const TarefaModel = require('../models/TarefaModel');
const FuncionarioModel = require('../models/FuncionarioModel');
const ProjetoModel = require('../models/ProjetoModel');

class TarefaController {
    static async criarTarefa(req, res) {
        try {
            const tarefa = new TarefaModel(req.body);
            await tarefa.save();
            res.status(201).json(tarefa);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async listarTarefas(req, res) {
        try {
            const tarefas = await TarefaModel.find().populate(['responsavel', 'projeto']);
            res.status(200).json(tarefas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async buscarTarefaPorId(req, res) {
        try {
            const tarefa = await TarefaModel.findById(req.params.id).populate(['responsavel', 'projeto']);
            if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
            res.status(200).json(tarefa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarTarefa(req, res) {
        try {
            const tarefa = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
            res.status(200).json(tarefa);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async removerTarefa(req, res) {
        try {
            const tarefa = await TarefaModel.findByIdAndDelete(req.params.id);
            if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TarefaController;