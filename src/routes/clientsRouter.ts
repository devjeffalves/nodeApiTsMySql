//Importar o pacote express para criar o servidor
const express = require('express');
//Instancia o express na variável router
const router = express.Router();

import clientsController from "../controller/clientsController";

//Listar usuários
router.get('/clients', clientsController.listClients);

//Cadastrar usuários
router.post('/client/', clientsController.createUsers);
//Atualizar usuários
router.put('/client/:id', clientsController.editUser);
//excluir usuários
router.delete('/client/:id', clientsController.deleteUser);

export default router;
