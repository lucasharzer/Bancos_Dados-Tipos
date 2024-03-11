require("dotenv").config();
const { Client } = require("pg");


class PostgreSQL {
    constructor() {
        this.client = new Client({
            user: process.env.USER,
            password: process.env.PASSWORD,
            host: process.env.HOST,
            port: process.env.PORT,
            database: process.env.DATABASE
        });
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Conectado ao banco");
        } catch (error) {
            console.error("Erro ao conectar ao banco:", error);
        }
    }

    async get_table() {
        this.tabela = process.env.TABLE;
    }

    async createTable() {
        try {
            await this.client.query(`
                CREATE TABLE IF NOT EXISTS ${this.tabela}
                (
                    Nome VARCHAR(100),
                    Telefone VARCHAR(50) NOT NULL,
                    Status INT NOT NULL,
                    Data TIMESTAMP
                )
            `);
            console.log(`Tabela '${this.tabela}' criada`);
        } catch (error) {
            console.error("Erro ao criar tabela:", error);
        }
    }

    async insertItem(nome, telefone, status, data) {
        try {
            await this.client.query(
                `INSERT INTO ${this.tabela} (Nome, Telefone, Status, Data)
                VALUES ($1, $2, $3, $4)`,
                [nome, telefone, status, data]
            );
            console.log("Item inserido");
        } catch (error) {
            console.error("Erro ao inserir item:", error);
        }
    }

    async updateItem(status, data, telefone) {
        try {
            await this.client.query(
                `UPDATE ${this.tabela} SET Status = $1, Data = $2 WHERE Telefone = $3`,
                [status, data, telefone]
            );
            console.log("Item atualizado");
        } catch (error) {
            console.error("Erro ao atualizar item:", error);
        }
    }

    async deleteItem(telefone) {
        try {
            await this.client.query(
                `DELETE FROM ${this.tabela} WHERE Telefone = $1`,
                [telefone]
            );
            console.log("Item deletado");
        } catch (error) {
            console.error("Erro ao deletar item:", error);
        }
    }

    async selectAll() {
        try {
            const result = await this.client.query(`SELECT * FROM ${this.tabela}`);
            console.log("Todos os registros encontrados: ", result.rows);
            return result.rows;
        } catch (error) {
            console.error("Erro ao selecionar todos os itens:", error);
            return [];
        }
    }

    async selectWithFilter(status, telefone) {
        try {
            const result = await this.client.query(
                `SELECT * FROM ${this.tabela} WHERE Status = $1 AND Telefone = $2`,
                [status, telefone]
            );
            console.log("Registros encontrados com filtro: ", result.rows);
            return result.rows;
        } catch (error) {
            console.error("Erro ao selecionar itens com filtro:", error);
            return [];
        }
    }

    async closeConnection() {
        try {
            await this.client.end();
            console.log("Conexão fechada");
        } catch (error) {
            console.error("Erro ao fechar conexão:", error);
        }
    }
}


module.exports = PostgreSQL;