# Banco de dados NoSQL - Cassandra

Banco de dados não relacional do tipo coluna;

Fazendo conexão e executando queries básicas (Inserir, Selecionar, atualizar e deletar) no banco de dados Cassandra em execução no Docker usando NodeJS e Python.

# Pacotes
- dotenv: Biblioteca do NodeJS para acessar variáveis de ambiente no .env;
- cassandra-driver: Biblioteca do NodeJS para conexão com Cassandra;
- python-dotenv: Biblioteca do Python para acessar variáveis de ambiente no .env;
- cassandra-driver: Biblioteca do Python para conexão com Cassandra.

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
- Docker | Executar contêiner do Cassandra:
```bash
docker run --name <nome do contêiner> -p 9042:9042 -d cassandra:latest
```
- Docker | Listar imagens:
```bash
docker image ls
```
- Docker | Listar contêineres:
```bash
docker ps
```
- Docker | Acessar CLI do contêiner:
```bash
docker exec -it <nome do contêiner> bash
```
- Docker | Definir Datacenter do banco:
```bash
cd /etc/cassandra
cat cassandra-rackdc.properties
dc=datacenter1
```
- Docker | Sair da CLI do contêiner:
```bash
exit
```

# Resultados
- NodeJS
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/1a435e3b-747e-4a31-b519-63f2594aa99a">
</span>

- Python
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/53ca66b0-c945-4ea1-a9ea-472782dd87ba">
</span>

- Docker
<span>
    <img src="https://github.com/lucasharzer/Bancos_Dados-Tipos/assets/85804895/f802ff17-fd64-4d18-93cf-60c377bcee91">
</span>
