from dotenv import load_dotenv, find_dotenv
from cassandra.cluster import Cluster
import os


class CassandraDB:
    def __init__(self):
        load_dotenv(find_dotenv())
        host = os.getenv("HOST")

        self.keyspace = os.getenv("KEYSPACE")
        self.table = os.getenv("TABLE")

        self.cluster = Cluster([host])
    
    def connect(self):
        try:
            self.session = self.cluster.connect()
        except Exception as e:
            print(e)

    def create_keyspace(self):
        query = f"""
            CREATE KEYSPACE IF NOT EXISTS {self.keyspace} 
            WITH replication = {{'class': 'SimpleStrategy', 'replication_factor': 1}}
        """
        try:
            self.session.execute(query)
            self.session.set_keyspace(self.keyspace)
            print(f"Keyspace {self.keyspace} criado")
        except Exception as e:
            print(e)
    
    def create_table(self):
        query = f"""
            CREATE TABLE IF NOT EXISTS {self.table} (
                Nome TEXT,
                Telefone TEXT PRIMARY KEY,
                Status INT,
                Data TIMESTAMP
            )
        """
        try:
            self.session.execute(query)
            print(f"Tabela {self.table} criada")
        except Exception as e:
            print(e)

    def insert_item(self, nome, telefone, status, data):
        query = f"""
            INSERT INTO {self.table} (Nome, Telefone, Status, Data)
            VALUES (%s, %s, %s, %s)
        """
        params = (nome, telefone, status, data)
        self.session.execute(query, params)
        print(f"Item inserido com telefone: {telefone}")
    
    def update_item(self, status, data, telefone):
        query = f"""
            UPDATE {self.table} SET Status = %s, Data = %s
            WHERE Telefone = %s
        """
        params = (status, data, telefone)
        try:
            self.session.execute(query, params)
            print(f"Item atualizado com telefone: {telefone}")
        except Exception as e:
            print(e)

    def delete_item(self, telefone):
        query = f"""
            DELETE FROM {self.table} WHERE Telefone = %s
        """
        params = (telefone,)
        try:
            self.session.execute(query, params)
            print(f"Item deletado com telefone: {telefone}")
        except Exception as e:
            print(e)

    def select_all_items(self):
        query = f"SELECT * FROM {self.table}"
        try:
            resultados = self.session.execute(query)
            if resultados:
                print("Todos os itens:")
                pos = 0
                for resultado in resultados:
                    # print(resultado)
                    pos += 1
                    print(f"{pos} - Nome: {resultado.nome} | Telefone: {resultado.telefone} | Status: {resultado.status} | Data: {resultado.data}")
            else:
                print("Não há resultados")
        except Exception as e:
            print(e)

    def select_with_filter(self, telefone):
        query = f"SELECT * FROM {self.table} WHERE Telefone = %s"
        params = (telefone,)
        try:
            resultados = self.session.execute(query, params)
            if resultados:
                print("Registro encontrado:")
                for resultado in resultados:
                    print(f"- Nome: {resultado.nome} | Telefone: {resultado.telefone} | Status: {resultado.status} | Data: {resultado.data}")
            else:
                print("Registro não encontrado")
        except Exception as e:
            print(e)
    
    def close_connection(self):
        try:
            self.session.shutdown()
        except Exception as e:
            print(e) 
