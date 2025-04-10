import express from "express"

const router = express.Router();

router.get("/clientes", (req, res) => {
// Array com lista de Produtos
const clientes = [
    {nome: "Larissa", cpf: "123.123.123-12", endereco: "Rua 1, 10"},
    {nome: "Ananda", cpf: "234.234.234-23", endereco: "Rua 2, 20"},
    {nome: "Samia", cpf: "456.456.456-45", endereco: "Rua 3, 30"},
    {nome: "Francielly", cpf: "678.678.678-67", endereco: "Rua 4, 40"},
    {nome: "Catarine", cpf: "890.890.890-89", endereco: "Rua 5, 50"},
    
];
res.render("clientes", {
    // Enviando a variável produto para a página
    clientes : clientes,
  });
});

export default router;