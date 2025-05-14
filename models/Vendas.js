// Importando o Sequelize

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
// Método define que define a estrutura da tabela (colunas)

const Venda = connection.define ('vendas', {
    // Colunas da tabela
    Valor: {
        // Tipo de dado
        type: Sequelize.STRING,
        // Permissão de vazio (NULL/NOTNULL)
        allowNull: false
    }, 

});

Venda.sync({force:false}); // Apenas cria a tabela se ela ainda não existir

export default Venda;