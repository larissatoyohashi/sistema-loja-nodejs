// Importando o Sequelize

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
// Método define que define a estrutura da tabela (colunas)

const Produto = connection.define ('produtos', {
    // Colunas da tabela
    nome: {
        // Tipo de dado
        type: Sequelize.STRING,
        // Permissão de vazio (NULL/NOTNULL)
        allowNull: false
    }, 


    preco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    categoria: {
        type: Sequelize.STRING,
        alloqNull: false
    },
    
});

Produto.sync({force:false}); // Apenas cria a tabela se ela ainda não existir

export default Produto;