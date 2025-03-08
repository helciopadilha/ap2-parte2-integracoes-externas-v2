const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) 
    return res.status(401).json({ auth: false, mensagem: 'Token não fornecido.' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) 
      return res.status(500).json({ auth: false, mensagem: 'Falha ao autenticar o token.' });

    req.userId = decoded.id;
    next();
  });
};
