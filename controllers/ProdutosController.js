import express from "express"

const router = express.Router();

router.get("/produtos", (req, res) => {
// Array com lista de Produtos
const produtos = [
    {nome: "Orgulho e Preconceito", preco: 39.90, categoria: "Romance", imagem:"images/orgulhoepreconceito.jpg"},
    {nome: "Razão e Sensibilidade", preco: 29.90, categoria: "Romance", imagem:"images/razaoesensibilidade.jpg"},
    {nome: "Emma", preco: 39.90, categoria: "Romance", imagem:"images/emma.jpg"},
    {nome: "It a Coisa", preco: 60.00, categoria: "Terror", imagem:"images/itacoisa.jpg"},
    {nome: "O Homem de Giz", preco: 30.00, categoria: "Suspense", imagem:"images/homemdegiz.jpg"},
];
res.render("produtos", {
    // Enviando a variável produto para a página
    produtos : produtos,
  });
});

export default router;