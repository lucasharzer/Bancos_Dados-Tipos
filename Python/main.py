from database import CassandraDB


try:
    db = CassandraDB()
    # Iniciar conexão ao banco de dados
    db.connect()
    # Criar keyspace
    db.create_keyspace()
    # Criar tabela
    db.create_table()
    # Inserir item
    db.insert_item("Peter Griffin", "5511309682976", 1, "2024-03-23 14:09:37")
    db.insert_item("David Johnson", "5511285603478", 0, "2024-03-23 14:58:08")
    db.insert_item("Janete Wille", "5511960386532", 1, "2024-03-23 14:59:22")
    # Atualizar item
    db.update_item(1, "2024-03-23 15:01:43", "5511285603478")
    # Deletar item
    db.delete_item("5511960386532")
    # Selecionar todos os itens
    db.select_all_items()
    # Selecionar com filtro
    db.select_with_filter("5511309682976")
except Exception as e:
    print(e)
finally:
    db.close_connection()
