const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "luiz"
 *               senha:
 *                 type: string
 *                 example: "123"
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso.
 *       401:
 *         description: Usuário ou senha inválidos.
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Realiza o logout do usuário.
 *     responses:
 *       200:
 *         description: Logout realizado com sucesso.
 */
router.post('/logout', authController.logout);

module.exports = router;