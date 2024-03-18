require("dotenv").config();
const { createClient } = require('redis');


class RedisDB {
    constructor() {
        this.host = process.env.HOST.toString();
        this.port = parseInt(process.env.PORT);
    }

    async connect() {
        this.client = await createClient({ 
            host: "localhost", port: 6379 
        })
            .on("error", err => console.log("Redis Client Error", err))
            .connect();
    }

    async insertItem(chave, valor) {
        await this.client.set(chave, valor);
        console.log(`Item inserido: ${chave} - ${valor}`);
    }

    async updateItem(chave, valor) {
        await this.client.set(chave, valor);
        console.log(`Item atualizado: ${chave} - ${valor}`);
    }

    async deleteItem(chave) {
        await this.client.del(chave);
        console.log(`Chave deletada: ${chave}`);
    }

    async selectItem(chave) {
        const resultado = await this.client.get(chave);
        console.log(`Valor da chave "${chave}": ${resultado}`);
    }

    async selectAllKeys() {
        const resultado = await this.client.keys("*") // Há como selecionar com prefixos, ex: "N*"
        console.log("Todas as chaves:");
        console.log(resultado);
    }

    async closeConnection() {
        await this.client.disconnect();
    }
}

module.exports = RedisDB;