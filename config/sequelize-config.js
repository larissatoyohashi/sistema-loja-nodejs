// Importando o Sequelize

import Sequelize from "sequelize";

// Criando os dados de conexão com o Banco de Dados

const connection = new Sequelize({  // Objeto que vai ser a instância da classe Sequelize 

        dialect: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '',
        // Comente a linha abaixo na primeira execução do projeto
        database: 'sistemaloja',
        timezone: "-03:00"
})

// Exportando o módulo

export default connection;
