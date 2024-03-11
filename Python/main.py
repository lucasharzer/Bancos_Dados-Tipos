from database import PostgresSQL


# Conectar ao banco
postgre = PostgresSQL()
postgre.get_cursor()

# Criar tabela
postgre.create_table()

# Inserir item
postgre.insert_item(
    "Peter Griffin", "5511309682976", 1, "2024-03-10 16:15:00"
)

# Atualizar item
postgre.update_item(
    0, "2024-03-10 16:17:00", "5511309682976"
)

# Deletar item
postgre.delete_item("5511309682976")

# Selecionar tudo
postgre.select_all()

# Selecionar com filtro
postgre.select_with_filter("5511309682976")

# Fechar conexão
postgre.close_connection()