require("dotenv").config();
const { Client } = require("cassandra-driver");


class CassandraDB {
    constructor() {
        const reserved_keyspace = process.env.RESERVED_KEYSPACE;
        const data_center = process.env.DATA_CENTER;
        const host = process.env.HOST;
        const port = process.env.PORT;

        this.keyspace = process.env.KEYSPACE;
        this.table = process.env.TABLE;

        this.client = new Client({
            contactPoints: [`${host}:${port}`],
            localDataCenter: data_center,
            keyspace: reserved_keyspace
        });
    }

    async connect() {
        try {
            await this.client.connect();
        }catch(err) {
            console.error(err);
        }
    }

    async createKeyspace() {
        const query = `
            CREATE KEYSPACE IF NOT EXISTS ${this.keyspace}
            WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}
        `
        try {
            await this.client.execute(query);
            console.log(`Keyspace ${this.keyspace} criado`);
        }catch(err) {
            console.error(err);
        }
    }

    async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS ${this.keyspace}.${this.table} (
                Nome TEXT,
                Telefone TEXT PRIMARY KEY,
                Status INT,
                Data TIMESTAMP
            )
        `
        try {
            await this.client.execute(query);
            console.log(`Tabela ${this.table} criada`);
        }catch(err) {
            console.error(err);
        }
    }

    async insertItem(nome, telefone, status, data) {
        const query = `
            INSERT INTO ${this.keyspace}.${this.table} 
            (Nome, Telefone, Status, Data) VALUES (?, ?, ?, ?)
        `;
        const params = [nome, telefone, status, data];
        try {
            await this.client.execute(query, params, { prepare: true });
            console.log(`Item inserido com telefone ${telefone}`);
        }catch(err) {
            console.error(err);
        }
    }

    async updateItem(status, data, telefone) {
        const query = `
            UPDATE ${this.keyspace}.${this.table} 
            SET Status = ?, Data = ? WHERE Telefone = ?
        `;
        const params = [status, data, telefone];
        try {
            await this.client.execute(query, params, { prepare: true });
            console.log(`Item atualizado com telefone: ${telefone}`);
        }catch(err) {
            console.error(err);
        }
    }

    async deleteItem(telefone) {
        const query = `
            DELETE FROM ${this.keyspace}.${this.table} WHERE Telefone = ?
        `;
        const params = [telefone];
        try {
            await this.client.execute(query, params, { prepare: true });
            console.log(`Item deletado com telefone: ${telefone}`);
        }catch(err) {
            console.error(err);
        }
    }

    async selectAllItems() {
        const query = `SELECT * FROM ${this.keyspace}.${this.table}`;
        try {
            const resultado = await this.client.execute(query);
            console.log("Todos os registros da tabela: ");
            console.log(resultado.rows);
        }catch(err) {
            console.error(err);
        }
    }

    async selectWithFilter(telefone) {
        const query = `
            SELECT * FROM ${this.keyspace}.${this.table} WHERE Telefone = ?
        `;
        const params = [telefone];
        try {
            const resultado = await this.client.execute(
                query, params, { prepare: true }
            );
            // console.log(resultado.rows); 
            // resultado.rows[0].Nome, resultado.rows[0].Telefone, resultado.rows[0].Status e resultado.rows[0].Data
            console.log(resultado.info);
            console.log(resultado.rowLength);
            console.log(resultado.columns);
            resultado.rows.forEach(row => {
                console.log(
                    `Nome: ${row.nome} | Telefone: ${row.telefone} | Status: ${row.status} | Data: ${row.data}`
                );
            });
        }catch(err) {
            console.error(err);
        }
    }

    async closeConnection() {
        await this.client.shutdown();
    }
}


module.exports = CassandraDB;