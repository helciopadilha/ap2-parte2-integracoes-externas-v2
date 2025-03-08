const bcrypt = require('bcryptjs');

const senha = '123';
const hash = bcrypt.hashSync(senha, 10);

console.log(`Hash gerado para "${senha}":`, hash);
