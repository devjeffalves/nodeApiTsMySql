//Importar o pacote express para criar o servidor
const express = require('express');
//Instancia o express na variável router
const router = express.Router();

import cartController from "../controller/cartController";

//Listar usuários
router.get('/cart', cartController.listCart);
//Cadastrar usuários
router.post('/cart/', cartController.createCart);
//Atualizar usuários
router.put('/cart/:id', cartController.editCart);
//excluir usuários
router.delete('/cart/:id', cartController.deleteCart);

export default router;
