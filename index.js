// Modo ES6 de importação
import express from "express";

const app = express(); // Iniciando o Express

import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import VendasController from "./controllers/VendasController.js"

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/",ProdutosController);
app.use("/",ClientesController);
app.use("/",VendasController);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8081, (error) => {
    if (error) {
        console.log("Ocorreu um ero ao iniciar o servidor!" + error); }else{
            console.log("Servidor iniciado com sucesso!");
        } 
});
