# Banco de dados SQL - PostgreSQL
Fazendo conexão e executando queries básicas (Inserir, Selecionar, atualizar e deletar) no banco de dados PostgreSQL em execução no Docker usando NodeJS e Python.

# Pacotes
- dotenv: Biblioteca do NodeJS para acessar variáveis de ambiente no .env;
- pg: Biblioteca do NodeJS para conexão com PostgreSQL;
- python-dotenv: Biblioteca do Python para acessar variáveis de ambiente no .env;
- psycopg2-binary: Biblioteca do Python para conexão com PostgreSQL.

# Comandos
- NodeJS | Instalar dependências:
```bash
npm install
```
- NodeJS | Executar testes:
```bash
npm start
```
- Python | Instalar dependências:
```bash
pip install -r requirements.txt
```
- Python | Executar testes:
```bash
python main.py
```
- Docker | Executar contêiner do PostgreSQL:
```bash
docker run --name <nome do contêiner> -e POSTGRES_PASSWORD=<senha do banco> -p 5432:5432 -d postgres
```
Listar imagens:
```bash
docker image ls
```
Listar contêineres:
```bash
docker ps
```

# Resultados
- NodeJS
<span>
    <img src="https://github.com/lucasharzer/Docker_Testes/assets/85804895/f00e0af0-4ce0-497f-bb45-f3ea33acd229">
</span>

- Python
<span>
    <img src="https://github.com/lucasharzer/Docker_Testes/assets/85804895/2950b5ce-eb00-4d3e-a750-85bb940a87b6">
</span>

- Docker
<span>
    <img src="https://github.com/lucasharzer/Docker_Testes/assets/85804895/e5819773-b22d-4324-9f8e-98eced35456e">
</span>
