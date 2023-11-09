//Importar o pacote express para criar o servidor
const express = require('express');
//Instancia o express na variável router
const router = express.Router();

import cartController from "../controller/cartController";

//Listar usuários
router.get('/clients', cartController.listCart);

//Cadastrar usuários
router.post('/client/', cartController.createCart);
//Atualizar usuários
router.put('/client/:id', cartController.editCart);
//excluir usuários
router.delete('/client/:id', cartController.deleteCart);

export default router;
