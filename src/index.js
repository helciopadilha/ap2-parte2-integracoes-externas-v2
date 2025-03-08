require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const verifyJWT = require('./middlewares/verifyJWT');

const app = express();

app.use(express.json());
app.use(cors());

// Rota pública
app.get('/', (req, res) => {
  res.json({ mensagem: "API rodando perfeitamente!" });
});

// Rota protegida
app.get('/users', verifyJWT, (req, res) => {
  res.json([
    { id: 1, nome: 'João Silva', email: 'joao@exemplo.com' },
    { id: 2, nome: 'Maria Souza', email: 'maria@exemplo.com' }
  ]);
});

// Rotas de autenticação
app.use('/auth', authRoutes);

// Única declaração da porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
