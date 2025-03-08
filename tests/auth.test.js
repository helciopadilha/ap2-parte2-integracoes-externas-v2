const request = require('supertest');
const app = require('../src/server'); 

describe('Testes da API de autenticação', () => {
  it('Deve retornar um token JWT ao fazer login com credenciais corretas', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ usuario: 'luiz', senha: '123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('auth', true);
    expect(res.body).toHaveProperty('token');
  });

  it('Deve retornar erro 401 ao tentar login com credenciais inválidas', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ usuario: 'invalido', senha: 'errada' });

    expect(res.statusCode).toBe(401);
  });

  it('Deve permitir o logout do usuário', async () => {
    const res = await request(app).post('/auth/logout');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('auth', false);
  });
});
