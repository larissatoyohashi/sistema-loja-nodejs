import express from "express";

// Importando o Model de Cliente
import Produto from "../models/Produtos.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/produtos", function (req, res) {
  // Fazendo um SELECT na tabela de Clientes
  // findAll() -> retorna uma promise
 
  Produto.findAll().then((produtos) => {
  res.render("produtos", {
    produtos: produtos,
  });
 }).catch((error) => {
    console.log(error);
 })
});

// ROTA DE CADASTRO DE CLIENTE
// get -> Recupera
// post -> Cadastra

router.post("/produtos/new", (req, res) => {
    const nome = req.body.nome; 
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    
    Produto.create({
      nome: nome,
      preco: preco,
      categoria: categoria,
    }).then(() => {
      console.log(`Realizado o cadastro: ${nome} - ${preco} - ${categoria}`)
      res.redirect("/produtos");
    }).catch(error => {
      console.log(error);
    });

   
// ROTA DE EXCLUSÃO DE CLIENTE

router.get("/produtos/delete/:id", (req, res) => {
  // Coletando o parâmetro ID da rota
  const id = req.params.id;
  Produto.destroy({
    where: {
      id : id
    }
  }).then(() => {
    console.log(`Produto com a ID ${id} excluído com sucesso!`);
    res.redirect("/produtos");
  }).catch(error => {
    console.log(error);
  });
});

});


export default router;