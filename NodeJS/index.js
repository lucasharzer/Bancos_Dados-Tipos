const MongoDB = require("./database")


async function main() {
    const mongo = new MongoDB();
    await mongo.connect();
    await mongo.getCollection();

    // Inserir item
    const insertedId = await mongo.insertOne({
        Nome: "Peter Griffin", Telefone: "5511309682976", 
        Status: 1, Data: "2024-03-09 21:10:00"
    });
    console.log("Item inserido: ", insertedId);

    // Atualizar item
    const updateResult = await mongo.updateOne({ Nome: "Peter Griffin" }, { Status: 0, Data: "2024-03-09 22:05:00" });
    console.log("Número de documentos modificados:", updateResult);

    // Deletar item
    const deleteResult = await mongo.deleteOne({ Nome: "Peter Griffin" });
    console.log("Número de documentos deletados: ", deleteResult);

    // Selecionar todos os itens
    await mongo.findAll();

    // Selecionar itens com filtro
    await mongo.findWithFilter({ Status: 1 });

    // Fechar conexão
    await mongo.close();
}

main()