import { Request, Response } from "express";
import db from '../config/database';

//Listar usuários
async function listProducts(req: Request, res: Response){
    db.connection.query('SELECT * FROM products', (err, 
     results) => {
         if(err) {
     res.json({
         success: false
     });
         
 }else {
 res.json({
     success: true,
     message: 'Listagem de produtos realizada com sucesso!',
     data: results
 });
 }
     });
 }
 //Cadastrar Usuários
async function createProduct(req: Request, res: Response) {
    const querysql = `INSERT INTO products (DS_NAME, DS_DESCRIPTION, NM_VALUE, DS_BRAND, DS_STATUS) 
    VALUES(?,?,?)`;
    const params = Array(
        req.body.DS_NAME,
        req.body.DS_DESCRIPTION,
        req.body.NM_VALUE,
        req.body.DS_BRAND,
        req.body.DS_STATUS
    )

    db.connection.query(querysql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Produto cadastrado com sucesso!',
            data: results
        });
    })
}
//Atualizar clientes
async function editProduct(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = `UPDATE product SET DS_NAME = ?,
    DS_DESCRIPTION = ?,NM_VALUE, DS_BRAND, FL_STATUS = ? WHERE ID_PRODUCT = ?`;

    const params = Array(
        req.body.DS_NAME,
        req.body.DS_DESCRIPTION,
        req.body.NM_VALUE,
        req.body.DS_BRAND,
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
async function deleteProduct (req:Request, res: Response) { 
    const queryString = `DELETE FROM product WHERE
    ID_PRODUCT = ?`;
    db.connection.query(queryString, [req.params.id], (err, results) => {
            res.json({
                success: true,
                message: 'removido'
            });
    })
}


export default {
    listProducts,
    createProduct,
    editProduct,
    deleteProduct
}
