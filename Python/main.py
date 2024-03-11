from database import MongoDB


# Testes com MongoDB
mongo = MongoDB()
mongo.get_collection()

# Inserir item
inserted_id = mongo.insert_one({
    "Nome": "Peter Griffin", "Telefone": "5511309682976", 
    "Status": 1, "Data": "2024-03-09 21:10:00"
})
print("Item inserido com ID:", inserted_id)

# Atualizar item
update_result = mongo.update_one({"Nome": "Peter Griffin"}, {"Status": 0})
print("Número de documentos modificados:", update_result)

# Deletar item
delete_result = mongo.delete_one({"Nome": "Peter Griffin"})
print("Número de documentos deletados:", delete_result)

# Selecionar item com filtro
filter_result = mongo.find_one({"Status": 0})
print("Documentos encontrado: ", filter_result)

# Selecionar todos os itens
all_documents = mongo.find_all()
if len(all_documents) != 0:
    print("Todos os documentos:")
    for doc in all_documents:
        print(doc)
else:
    print("Nenhum documento")

# Fechar conexão
mongo.close_connection()