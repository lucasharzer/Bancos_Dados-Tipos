require("dotenv").config();
const { MongoClient } = require("mongodb");


class MongoDB {
    constructor() {
        this.uri = `${process.env.URI}:${process.env.PORT.toString()}`;
        this.client = new MongoClient(
            this.uri, { useNewUrlParser: true, useUnifiedTopology: true 
        });
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Conectado ao MongoDB");
        } catch (error) {
            console.error("Erro ao conectar ao MongoDB:", error);
        }
    }

    async getCollection() {
        const database = this.client.db(process.env.DB);
        this.collection = database.collection(process.env.COLLECTION);
    }

    async insertOne(document) {
        try {
            const result = await this.collection.insertOne(document);
            return result.insertedId;
        } catch (error) {
            console.error("Erro ao inserir documento: ", error);
        }
    }

    async deleteOne(filter) {
        try {
            const result = await this.collection.deleteOne(filter);
            return result.deletedCount;
        } catch (error) {
            console.error("Erro ao deletar documento:", error);
        }
    }

    async updateOne(filter, update) {
        try {
            const result = await this.collection.updateOne(filter, { $set: update });
            return result.modifiedCount;
        } catch (error) {
            console.error("Erro ao atualizar documento:", error);
        }
    }

    async findAll() {
        try {
            const cursor = await this.collection.find();
            const result = await cursor.toArray();
            if (result.length != 0) {
                console.log("Todos os documentos:");
                result.forEach(doc => console.log(doc));
            }else {
                console.log("Nenhum documento");
            }
            return result;
        } catch (error) {
            console.error("Erro ao buscar todos os documentos:", error);
        }
    }

    async findWithFilter(filter) {
        try {
            const cursor = await this.collection.find(filter);
            const result = await cursor.toArray();
            if (result.length != 0) {
                console.log("Documentos com filtro:");
                result.forEach(doc => console.log(doc));
            }else {
                console.log("Nenhum documento");
            }
            return result;
        } catch (error) {
            console.error("Erro ao buscar documentos com filtro:", error);
        }
    }

    async close() {
        try {
            await this.client.close();
            console.log("Conexão fechada com o MongoDB");
        } catch (error) {
            console.error("Erro ao fechar conexão:", error);
        }
    }
}


module.exports = MongoDB;