const PostgreSQL = require("./database");


async function main() {
    const postgre = new PostgreSQL();

    // Conectar ao banco
    await postgre.connect();
    await postgre.get_table();

    // Criar tabela
    await postgre.createTable();

    // Inserir item
    await postgre.insertItem(
        "Peter Griffin", "5511309682976", 0, "2024-03-10 15:02:00"
    );

    // Atualizar item
    await postgre.updateItem(
        1, "2024-03-10 15:07:00", "5511309682976"
    );

    // Deletar item
    await postgre.deleteItem("5511309682976");

    // Selecionar todos os itens
    await postgre.selectAll()

    // Selecionar itens com filtro
    await postgre.selectWithFilter(0, "5511309682976");

    // Fechar conexão
    await postgre.closeConnection();
}

main();