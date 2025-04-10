import express from "express"

const router = express.Router();

router.get("/produtos", (req, res) => {
// Array com lista de Produtos
const produtos = [
    {nome: "Orgulho e Preconceito", preco: 39.90, categoria: "Romance"},
    {nome: "Razão e Sensibilidade", preco: 29.90, categoria: "Romance"},
    {nome: "Emma", preco: 39.90, categoria: "Romance"},
    {nome: "It a Coisa", preco: 60.00, categoria: "Terror"},
    {nome: "O Homem de Giz", preco: 30.00, categoria: "Suspense" },
];
res.render("produtos", {
    // Enviando a variável produto para a página
    produtos : produtos,
  });
});

export default router;