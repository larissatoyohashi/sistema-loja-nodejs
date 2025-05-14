// Modo ES6 de importação
import express from "express";

const app = express(); // Iniciando o Express

import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import VendasController from "./controllers/VendasController.js"

// Importando o Sequelize-Config com os dados da conexão
import connection from "./config/sequelize-config.js";

connection.authenticate().then(() => {
    console.log("Conexão com o banco realizada com sucesso!");
    }).catch((error) => {
      console.log(error);
    })
    
    // Criar o banco de dados do projeto (se ele não existir)
    connection.query(`CREATE DATABASE IF NOT EXISTS sistemaLoja;`).then(() => {
    console.log("O banco de dados está criado");
    }).catch((error) => {
      console.log(error);
    });

// Configurando o Express para aceitar dados vindos de um formulário
app.use(express.urlencoded({extended : false})); // Dados que serão tratados são comuns, não extende os tipos de dados


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
