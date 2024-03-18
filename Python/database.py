from dotenv import load_dotenv, find_dotenv
import redis
import os


class RedisDB:
    def __init__(self):
        load_dotenv(find_dotenv())
        self.redisdb = redis.StrictRedis(
            host=str(os.getenv("HOST")), port=int(os.getenv("PORT"))
        )

    def insert_item(self, chave, valor):
        self.redisdb.set(chave, valor)
        print(f"Item inserido: {chave} - {valor}")

    def update_item(self, chave, valor):
        self.redisdb.set(chave, valor)
        print(f"Item atualizado: {chave} - {valor}")

    def delete_item(self, chave):
        self.redisdb.delete(chave)
        print(f"Item deletado: {chave}")

    def select_item(self, chave):
        resultado = self.redisdb.get(chave)
        if resultado is not None:
            print('Valor da chave "{}": "{}"'.format(
                chave, resultado.decode("utf-8")
            ))
        else:
            print(f'Chave "{chave}" não encontrada')

    def select_all_items(self):
        chaves = self.redisdb.keys("*") # Há como selecionar com prefixos, ex: "N*"
        print("Todas as chaves:", end=" ")
        for chave in chaves:
            if chave == chaves[-1]:
                separador = ".\n"
            elif chave == chaves[-2]:
                separador = " e "
            else:
                separador = ", "

            print(chave.decode("utf-8"), end=separador)

    def close_connection(self):
        self.redisdb.close()
