const CassandraDB = require("./database");


const db = new CassandraDB();

async function main() {
    try {
        // Conectar ao banco de dados
        await db.connect();
        // Criar keyspace
        await db.createKeyspace();
        // Criar tabela
        await db.createTable();
        // Inserir item
        await db.insertItem(
            "Peter Griffin", "5511309682976", 1, "2024-03-23 00:44:23"
        )
        await db.insertItem(
            "David Johnson", "5511285603478", 0, "2024-03-23 00:48:56"
        )
        await db.insertItem(
            "Janete Wille", "5511960386532", 1, "2024-03-23 00:51:04"
        )
        // Atualizar item
        await db.updateItem(0, "2024-03-23 13:00:35", "5511960386532");
        // Deletar item
        await db.deleteItem("5511285603478");
        // Selecionar todos registros
        await db.selectAllItems();
        // Selecionar com filtro
        await db.selectWithFilter("5511309682976");
    }catch(err) {
        console.error(err);
    }finally {
        // Fechar conexão
        await db.closeConnection();
    }
}


main();