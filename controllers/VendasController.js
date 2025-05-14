import express from "express";

// Importando o Model de Cliente
import Venda from "../models/Vendas.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/vendas", function (req, res) {

  Venda.findAll().then((produtos) => {
  res.render("vendas", {
    vendas: vendas,
  });
 }).catch((error) => {
    console.log(error);
 })
});


router.post("/vendas/new", (req, res) => {
    const valor = req.body.valor; 

    
    Venda.create({
      valor: valor,
    }).then(() => {
      console.log(`Realizado o cadastro: ${valor}`)
      res.redirect("/vendas");
    }).catch(error => {
      console.log(error);
    });

   
// ROTA DE EXCLUSÃO DE CLIENTE

router.get("/vendas/delete/:id", (req, res) => {
  // Coletando o parâmetro ID da rota
  const id = req.params.id;
  Venda.destroy({
    where: {
      id : id
    }
  }).then(() => {
    console.log(`Venda com a ID ${id} excluído com sucesso!`);
    res.redirect("/produtos");
  }).catch(error => {
    console.log(error);
  });
});

});


export default router;