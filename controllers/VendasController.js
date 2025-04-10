import express from "express"

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE PRODUTOS
router.get("/vendas", (req, res) => {
    // Coletando o parâmetrop da rota
  
  // ARRAY COM LISTA DE PRODUTOS
  
  const vendas = [
    {codigo: 1234, valor: 60.00},
    {codigo: 4321, valor: 120.00},
    {codigo: 5657, valor: 39.90},
    {codigo: 9874, valor: 79.60},
    {codigo: 6543, valor: 60.00},
];
  
  
    res.render("vendas", {
      // Enviando a variável produto para a página
      vendas : vendas,
    });
  });
  

  // Exportando o módulo ProdutosController.js
  export default router;