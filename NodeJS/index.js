const RedisDB = require("./database");


const db = new RedisDB();

async function main() {
    try {
        // Iniciar conexão ao banco
        await db.connect();
        // Inserir item
        await db.insertItem("Nome", "Peter Griffin");
        await db.insertItem("Telefone", "5511309682976");
        await db.insertItem("Status", 1);
        await db.insertItem("Idade", 26);
        // Atualizar item
        await db.updateItem("Status", 0);
        await db.updateItem("Idade", 27);
        // Deletar item
        await db.deleteItem("Status");
        // Selecionar item
        await db.selectItem("Nome");
        await db.selectItem("Telefone");
        await db.selectItem("Status");
        await db.selectItem("Idade");
        await db.selectItem("Endereço");
        await db.selectAllKeys();
    }catch(error) {
        console.error(error);
    }finally {
        await db.closeConnection()
    }
}

main();