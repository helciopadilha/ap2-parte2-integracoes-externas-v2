const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const USUARIO_FIXO = {
  id: 1,
  usuario: 'luiz',
  senha: '$2b$10$343O4Mb/1Ewkf1X1OdZ2kuAHS.w68Z/qW/wTev2.eKLi5UhlmMo3W' // hash de '123'
};

exports.login = async (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario !== USUARIO_FIXO.usuario)
    return res.status(401).json({ mensagem: 'Usuário inválido!' });

  const senhaValida = await bcrypt.compare(senha, USUARIO_FIXO.senha);
  
  if (!senhaValida) {
    return res.status(401).json({ mensagem: 'Senha inválida!' });
  }

  const token = jwt.sign({ id: USUARIO_FIXO.id }, process.env.SECRET, { expiresIn: 300 });

  res.json({ auth: true, token });
};

exports.logout = (req, res) => {
  res.json({ auth: false, token: null });
};