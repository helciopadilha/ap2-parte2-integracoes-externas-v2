const app = require('./index');

const PORT = process.env.PORT || 3000;

// Inicia o servidor apenas se não estiver rodando em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;