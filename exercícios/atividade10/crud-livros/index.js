require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); 


mongoose.connect(
  `mongodb+srv://AlexIesb:RkXlhRDgdNz3T6fO@cluster0.f7porr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() => console.log('✅ Conectado ao MongoDB Atlas'))
.catch(err => console.error('❌ Erro ao conectar:', err));


const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
});


const Livro = mongoose.model('Livro', livroSchema);


app.get('/', (req, res) => {
  res.send('API de Livros funcionando!');
});


app.post('/livros', async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


app.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});


app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livro);
  } catch (err) {
    res.status(400).json({ erro: 'ID inválido' });
  }
});


app.put('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livro);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar' });
  }
});


app.delete('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json({ mensagem: 'Livro removido com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao remover' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
