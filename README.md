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
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/2da7c55a-248f-4d61-a5c0-873e1667c718">
</span>

- Python
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/93966de5-274f-4771-97ba-ccb23166e3c8">
</span>

- Docker
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/f77341c7-b708-4d8d-96d7-1c15059b14a0">
</span>
