from database import RedisDB


# Coneão com o banco de dados
db = RedisDB()
# Inserir item
db.insert_item("Nome", "Peter Griffin")
db.insert_item("Telefone", "5511309682976")
db.insert_item("Status", 1)
db.insert_item("Idade", 26)
# Atualizar item
db.update_item("Status", 0)
db.insert_item("Idade", 27)
# Deletar item
db.delete_item("Status")
# Selecionar itens
db.select_item("Nome")
db.select_item("Telefone")
db.select_item("Endereço")
db.select_item("Status")
db.select_item("Idade")
db.select_all_items()
# Fechar conexão
db.close_connection()
