const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes'); 

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ [DB] Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro de conexão:', err));

app.get('/', (req, res) => {
  res.send('🚀 API funcionando e conectada ao MongoDB!');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 [API] Servidor rodando na porta ${PORT}`));
