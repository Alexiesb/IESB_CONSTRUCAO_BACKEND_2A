const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');
const validarID = require('../validators/IDValidator');
const { validarCriacao, validarAtualizacao } = require('../validators/LivroValidator');


router.post('/', validarCriacao, async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    return res.status(201).json(livro);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao criar livro' });
  }
});


router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find().sort({ createdAt: -1 });
    return res.json(livros);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar livros' });
  }
});


router.get('/:id', validarID, async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await Livro.findById(id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    return res.json(livro);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar livro' });
  }
});


router.put('/:id', validarID, validarAtualizacao, async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await Livro.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    return res.json(livro);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
});


router.delete('/:id', validarID, async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await Livro.findByIdAndDelete(id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    return res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao remover livro' });
  }
});

module.exports = router;
