from dotenv import load_dotenv, find_dotenv
import psycopg2
import os


class PostgresSQL:
    def __init__(self):
        load_dotenv(find_dotenv())
        self.conn = psycopg2.connect(
            dbname=os.getenv("DATABASE"),
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            host=os.getenv("HOST"),
            port=os.getenv("PORT")
        )

    def get_cursor(self):
        try:
            self.cursor = self.conn.cursor()
            self.tabela = os.getenv("TABLE")
        except psycopg2.Error as e:
            print("Erro: ", e)

    def create_table(self):
        try:
            self.cursor.execute(f"""
                CREATE TABLE IF NOT EXISTS {self.tabela}
                (
                    Nome VARCHAR(100),
                    Telefone VARCHAR(50) NOT NULL,
                    Status INT NOT NULL,
                    Data TIMESTAMP
                )
            """)
            print(f"tabela {self.tabela} criada")
        except psycopg2.Error as e:
            print("Erro ao criar tabela: ", e)
    
    def insert_item(self, nome, telefone, status, data):
        try:
            self.cursor.execute(f"""
                INSERT INTO {self.tabela} (Nome, Telefone, Status, Data)
                VALUES (%s, %s, %s, %s)
            """, (nome, telefone, status, data))
            print("Item inserido")
        except psycopg2.Error as e:
            print("Erro ao inserir item: ", e)
    
    def update_item(self, status, data, telefone):
        try:
            self.cursor.execute(f"""
                UPDATE {self.tabela} SET Status = %s, Data = %s 
                WHERE Telefone = %s
            """, (status, data, telefone))
            print("Item atualizado")
        except psycopg2.Error as e:
            print("Erro ao atualizar item: ", e)
    
    def delete_item(self, telefone):
        try:
            self.cursor.execute(f"""
                DELETE FROM {self.tabela} WHERE Telefone = %s
            """, (telefone, ))
            print("Item reovido")
        except psycopg2.Error as e:
            print("Erro ao deletar item: ", e)
    
    def select_all(self):
        try:
            self.cursor.execute(f"SELECT * FROM {self.tabela}")
            rows = self.cursor.fetchall()
            for row in rows:
                print(row)
        except psycopg2.Error as e:
            print("Erro ao selecionar: ", e)

    def select_with_filter(self, telefone):
        try:
            self.cursor.execute(f"""
                SELECT * FROM {self.tabela} 
                WHERE Telefone = %s
            """, (telefone, ))
            rows = self.cursor.fetchall() # fetchone - print(rows) para trazer cada valor separadamente
            for row in rows:
                print(row)
        except psycopg2.Error as e:
            print("Erro ao selecionar: ", e)
    
    def close_connection(self):
        self.cursor.close()
        self.conn.close()
