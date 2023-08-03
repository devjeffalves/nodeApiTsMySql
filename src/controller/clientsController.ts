import { Request, Response } from "express";
import db from '../config/database';

//Listar usuários
async function listClients(req: Request, res: Response){
    db.connection.query('SELECT * FROM clients_ecommerce', (err, 
     results) => {
         if(err) {
     res.json({
         success: false
     });
         
 }else {
 res.json({
     success: true,
     message: 'Listagem de clientes realizada com sucesso!',
     data: results
 });
 }
     });
 }
 //Cadastrar Usuários
async function createUsers(req: Request, res: Response) {
    const querysql = `INSERT INTO clients_ecommerce (DS_NAME, NM_CPF, FL_STATUS) 
    VALUES(?,?,?)`;
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS
    )

    db.connection.query(querysql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Cadastro realizado com sucesso!',
            data: results
        });
    })
}
//Atualizar clientes
async function editUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = `UPDATE clients_ecommerce SET DS_NAME = ?,
    NM_CPF = ?, FL_STATUS =? WHERE ID_CLIENT = ?`;

    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS,
        req.params.id
    );
    db.connection.query(querysql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Atualização realizada com sucesso!',
            data: results
        });
    })
}

//excluir usuários 
async function deleteUser (req:Request, res: Response) { 
    const queryString = `DELETE FROM clients_ecommerce WHERE
    ID_CLIENT = ?`;
    db.connection.query(queryString, [req.params.id], (err, results) => {
            res.json({
                success: true,
                message: 'removido'
            });
    })
}


export default {
    listClients,
    createUsers,
    editUser,
    deleteUser
}


