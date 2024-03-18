# Banco de dados NoSQL - Redis

Banco de dados não relacional do tipo chave-valor;

Fazendo conexão e executando queries básicas (Inserir, Selecionar, atualizar e deletar) no banco de dados Redis em execução no Docker usando NodeJS e Python.

# Pacotes
- dotenv: Biblioteca do NodeJS para acessar variáveis de ambiente no .env;
- redis: Biblioteca do NodeJS para conexão com banco de dados Redis;
- python-dotenv: Biblioteca do Python para acessar variáveis de ambiente no .env;
- redis: Biblioteca do Python para conexão com banco de dados Redis.

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
- Docker | Criar rede do Redis:
```bash
docker network create <nome da rede>
```
- Docker | Executar contêiner do Redis:
```bash
docker run -d --name <nome do contêiner> --network <nome da rede> -p 6379:6379 redis
```
- Docker | Listar imagens:
```bash
docker image ls
```
- Docker | Listar contêineres:
```bash
docker ps
```

# Resultados
- NodeJS
<span>
    <img src="">
</span>

- Python
<span>
    <img src="">
</span>

- Docker
<span>
    <img src="">
</span>
