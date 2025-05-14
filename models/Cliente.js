// Importando o Sequelize

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
// Método define que define a estrutura da tabela (colunas)

const Cliente = connection.define ('clientes', {
    // Colunas da tabela
    nome: {
        // Tipo de dado
        type: Sequelize.STRING,
        // Permissão de vazio (NULL/NOTNULL)
        allowNull: false
    }, 


    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    endereco: {
        type: Sequelize.STRING,
        alloqNull: false
    }
});

Cliente.sync({force:false}); // Apenas cria a tabela se ela ainda não existir

export default Cliente;