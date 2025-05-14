import express from "express";

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Fazendo um SELECT na tabela de Clientes
  // findAll() -> retorna uma promise
 
  Cliente.findAll().then((clientes) => {
  res.render("clientes", {
    clientes: clientes,
  });
 }).catch((error) => {
    console.log(error);
 })
});

// ROTA DE CADASTRO DE CLIENTE
// get -> Recupera
// post -> Cadastra

router.post("/clientes/new", (req, res) => {
  
  const id = req.params.id;  
  const nome = req.body.nome; 
    const cpf = req.body.cpf;
    const end = req.body.endereco;
    
    Cliente.create({
      id:id,
      nome: nome,
      cpf: cpf,
      endereco: end,
    }).then(() => {
      console.log(`Realizado o cadastro: ${nome} - ${end} - ${cpf}`)
      res.redirect("/clientes");
    }).catch(error => {
      console.log(error);
    });

    // ROTA DE EDIÇÃO DE CLIENTE
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id).then(function (clientes) {
    res.render("clientesEdit", {
      clientes: clientes,
    });
  });
});

// Rota de alteração de rotas
router.post("/clientes/edit/:id", (req, res) => {
    const id = req.params.id;  
    const nome = req.body.nome; 
    const cpf = req.body.cpf;
    const end = req.body.endereco;

  Cliente.update(
    {
      id:id,
      nome: nome,
      cpf: cpf,
      endereco: end,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/clientes");
  });
});

   
// ROTA DE EXCLUSÃO DE CLIENTE

router.get("/clientes/delete/:id", (req, res) => {
  // Coletando o parâmetro ID da rota
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id : id
    }
  }).then(() => {
    console.log(`Cliente com a ID ${id} excluído com sucesso!`);
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

});


export default router;