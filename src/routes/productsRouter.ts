//Importar o pacote express para criar o servidor
const express = require('express');
//Instancia o express na variável router
const router = express.Router();

import productsController from "../controller/productsController";

//Listar usuários
router.get('/products', productsController.listProducts);

//Cadastrar usuários
router.post('/product/', productsController.createProduct);
//Atualizar usuários
router.put('/product/:id', productsController.editProduct);
//excluir usuários
router.delete('/product/:id', productsController.deleteProduct);

export default router;
