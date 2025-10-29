require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const livroRoutes = require('./controllers/LivroController');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro ao conectar ao MongoDB', err));

app.use('/livros', livroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
