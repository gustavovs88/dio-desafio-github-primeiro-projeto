# Introdução ao MongoDB e Bancos de Dados NoSQL

- 1970 BD relacionais 
- 1998 BD NoSQL
- 2009 Reaparição do NoSQL

NoSQL é abreviatura de Not Only SQL



## Diferenças entre BD Relacionais e Não Relacionais



- Escalabilidade
  - SQL - Vertical
  - NoSQL - Horizontal (Particionando os dados 'sharding' entre os nós é o mais conhecido)
- Schemas
  - SQL - Regras rígidas e bem definidas de schemas
  - NoSQL - Não há necessidade de schemas
- Performance
  - SQL - Depende do disco rígido
  - NoSQL - Depende do cluster e latencia da rede
- Transações
  - SQL - ACID (Atomicidade, Consistência, Isolamento, Durabilidade)
  - NoSQL - BSE (Basically Available, Soft-State, Eventually Consistent)

## Vantagens do NoSQL

- Flexibilidade
- Escalabilidade
- Alta Performance

## Tipos de BDs NoSQL

- Baseados em documentos
- Chave-valor
- Orientado a colunas
- Orientados a Grafos

### Grafos

São estruturas matemáticas compostas entre nós(dados) e vértices (relacionamentos)

Muito usado para games e detecção de fraudes

Utiliza a linguagem Cypher

[Neo4j](https://sandbox.neo4j.com/) é o banco deste tipo mais utilizado atualmente.



### Colunas ou Familias de Colunas

A diferença deste tipo de banco de dados para os bancos de dados relacionais é de que, no caso dos bancos relacionais ao criar uma tupla (uma linha) todo o espaço de memória daquela linha é reservado, independente se houver ou não dados. 

Já o banco não relacional reserva espaço de memória somente para as posições linha x coluna que possuem dados.

O [Cassandra](https://www.katacoda.com/joechu/courses/cassandra-try-it-out) é o BD deste tipo mais utilizado atualmente. É um banco de dados opensource criado pelo Google.

- Possui uma boa performance quando o número de consultas é muito maior do que o de escrita e estas consultas o ideal é que sejam feitas pelas chaves primárias devido à sua performance maior de consulta

- É usado para registros de transações - compras, resultados de testes, filmes assistidos etc. e também para rastreamento.

- Utiliza a linguagem [CQL](https://cassandra.apache.org/doc/latest/cassandra/cql/index.html)

## Chave Valor

Armazena um conjunto de dados, seja simples ou complexo indentificados por um identificador exclusivo (chave)

- Bom desempenho em aplicações em na nuvem;
- Menor capacidade de busca.

[Redis](https://try.redis.io/) é o banco deste tipo mais utilizado hoje.

Muito utilizado para cache, messageria e fila

- Alto desempenho
- Estrutura de dados na memória
- Versatibilidade de uso
- Replicação e persistência

### Documento

Dados e documneots autocontidos e auto descritivos.

Permite redundância e inconsistência.

Livre de esquemas podendo utilizar JSON, XML entre outros.



Mongo DB é o mais utilizado.



## Mongo DB

### Introdução

- Código aberto
- Alta Performance
- Schema-free
- Utiliza JSON para armazenamento dos dados
- Suporte a índices
- Auto-Sharding
- Ferramenta Map-Reduce
- GridFS - para armazenamento de arquivos

O documento é a menor unidade que teremos no BD. 

Document ==> Tupla/Registro

Collection ==> Tabela

Embedding/linking ==> Join



Quando usar? Grande volume de dados / Dados não necessariamente estruturados.

Quando não usar? Necessidade de relacionamentos/joins. / Propriedades ACID e transações são inportantes



## Instalação com o Docker

É uma plataforma de CA de alto desempenho que permite criar e administrat ambientes de forma isolada, garantindo que possamos rapidamente disponibilizar o software para o usuário final. Algumas aplicações possuem imagens prontas para utilizar no container docker. Veja as opções na [bibilioteca de imagens do docker.](https://hub.docker.com/)

- [Instalar o docker](https://docs.docker.com/engine/install/ubuntu/) e o docker compose (`sudo apt install docker-compose`)

  - comandos básicos docker:

    - listar os containers ativos: `sudo docker ps`
    - iniciar o terminal no container: `sudo docker exec -it <container> bash`
    - iniciar um container: `sudo docker <container> start`
    - parar um container: `sudo docker <container> stop`
    - remover um container: `sudo rm <container>`
    - iniciar o compose: `sudo docker compose up`
    - reiniciar o compose com após atualizar o mesmo com novos parâmetros `sudo docker-compose up --build --force-recreate --renew-anon-volumes -d`

    

- Criar o arquivo [docker-compose](https://docs.docker.com/compose/):

Na pasta raiz do projeto crie o arquivo pelo terminal:

`touch docker-compose.yml`

Conteúdo do arquivo:

O version trata da versão do arquivo compose, [verifique no site as versões e compatibilidades disponíveis](https://docs.docker.com/compose/compose-file/). Certifique-se de subsituir a <senha> e <usuario> pelos valores desejados. O arquivo compose vai tratar do download e criação da imagem com as configurações pré-determinadas.

```yaml
version: "3.7"

services:
  db:
    image: mongo
    container_name: db
    restart: always
    environment:
      - MONGO_INITDB_DATABASE=db
      - MONGO_INITDB_ROOT_USERNAME=<usuario_root>
      - MONGO_INITDB_ROOT_PASSWORD=<senha_usuario_root>
    ports:
      - 27017:27017
    volumes:
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
      - ./dbdata:/data/db
    command: [--auth]
```

- Criar um arquivo js para inicialização do mongo:

```javascript
db.createUser({
  user: "<usuario_nao_root>",
  pwd: "<senha_usuario_nao_root>",
  roles: [
    {
      role: "readWrite",
      db: "db",
    },
  ],
});
```





- Rodar o arquivo compose:

a opção **-d** irá fazer com que o docker rode no background

`sudo docker-compose up -d`

- Verificar se a instalação foi correta:

`sudo docker container ps`

Este comando lista todos os containers docker que estão rodando na sua máquina, se tudo deu certo deve aparecer o container 'db' do mongo recém criado.

- conectar-se ao banco de dados:

`sudo exec -it db bash`

`mongo -u <usuario> -p <senha>`

`mongo --host 127.0.0.1:271017 -p <senha> -u <usuario>`

Neste momento você estará no terminal (shell) do mongodb e poderá trabalhar no banco de dados pelo terminal.

Existem GUI admin para o mongo que é open-source e pode ser intalado no Ubuntu:

- Robo3t

`sudo snap install robo3t-snap`

- [MongoDB compass](https://www.mongodb.com/products/compass)

### Mongo DB Cloud



Acessar o site https://www.mongodb.com/cloud e criar um cluster.



### Schema Designs

- **Embedding** x Referência
  - Documentos autocontidos
  - Pros:
    - COnsulta informações em uma única query
    - Atualiza o registro em uma única operação
  - contras:
    - Limte de 16MB por documento
- Embedding x **Referência**
  - Documentos com dependência de outros documentos ou collections
  - Prós:
    - Documentos pequenos
    - Não duplica informações
    - Usado quando os dados não são acessatos em todas as consultas
  - Contras:
    - duas ou mais querys ou utilização do $lookup - perda de performance
- One-to-one: chave valor

![plot](./image/image1.png)

- One-to-few: prefira o embedding

![plot](./image/image2.png)

- one-to-many e many-to-many: prefira referẽncia

![plot](./image/image3.png)



Padrões (patterns) com mongoDB: https://www.mongodb.com/blog/post/building-with-patterns-a-summary

![plot](./image/image4.png)



### Boas Práticas

- Evitar documentos grandes
- Use campos objetivos e curtos (nomes longos ocupam espaço no banco)
- Analise as as suas queries utilizando explain()
- Atualize apenas os campos alterados (cuidado com updates para atualizar campos específicos)
- Evite negações em queries
- Listas/Arrays dentro de documentos não podem crescer sem limites

### JSON x BSON

**BSON** é a maneira como o Mongo armazena seus dados:

- é uma serialização codificada em binário de documentos semelhantes a JSON

- contém extensões que permitem a representação de tipos de dados que não fazem parte da especificação JSON. Por exemplo, BSON tem um tipo Date, ObjectID

### Operações de Manipulação de dados

- Criar um banco de dados: O mongo nãio possui um comando para criar um db, basta indicar o uso de um db não existente que ele é criado automaticamente:

`use <nome_db>`

- Criar uma collection:
  - explicitamente (consegue passar validadores - num máx doc. etc): `db.createCollection(<nome_collection>, {<validadores_da_collection>})`
  - implicitamente (não é possível passar validadores) - basta dar um comando selecionando uma collection que não existe. ex. `db.<collection_que_nao_existe>.insertOne({"name": "Meu Nome"})`
- Selecionar arquivos: `db.<collection>.find({})` pode ser incluido o parâmetro limit para limitar os valores retornados -> `db.<collection>.find({}).limit(<numero_limite>)`
  - selecionar arquivos que está em um range de valores  `db.<collection>.find({"age": {$in: [30,41]}}) `
  - Selecionar um ou outro valor: `db.<collection>.find({$or: [{"name: "gustavo"}, {"age": 41}]}) `
  - Valores abaixo de determinado valor: operador`$lt` ou se for <= `$lte` -> `db.<collection>.find({"age": {$lt:30}) `
- Inserir um dado: `db.<collection>.insertOne({"name": "Meu Nome"})`
- Inserir vários dados: `db.<collection>.insert([{}])`
- Atualizar dados (se o dado não existir, ele cria um novo dado): `db.<collection>.save([{}])`
- Atualizar dados: `db.<collection>.update({<item_a_ser_atualizado>}, {$set: {<valor a ser atualizado>}}, {<outros_parametros>})`
- Atualizar muitos dados (atualiza todos os elementos que coincidem com o primeiro parâmetro): `db.<collection>.updateMany({<item_a_ser_atualizado>}, {$set: {<valor a ser atualizado>}})`
- Excluir um arquivo: `db.<collection>.deleteOne({"name": "Meu Nome"})`
- Excluir muitos arquivos: `db.<collection>.deleteMany({"name": "Meu Nome"})`
- Contar itens da colleciton: `db.getCollection('<collection>').count()`



O MongoDB possui uma linguagem muito rica de queiries e foram apresentados apenas uma pequena parte das possibilidades. Verifique na [documentação](https://docs.mongodb.com/manual/tutorial/query-documents/) todas as possibilidades!

### Performance e Índices

Utilizar o conceito de índices como se fosse um livro - direcionamento para onde está a informação.

Evitar o collectionScan - queries que escaneiam todos os documentos para retornar os dados. Ao usarmos os índices como forma de consulta evitamos o collectionScan e aumentamos significativamente a performance da query.

- Criando o índice para a collection:  `db.getCollection('<collection>').createIndx({name:1}, {"name": "idx_name"})`

- [Documentação de Índices](https://docs.mongodb.com/manual/indexes/)



### Agregações

Agregação é o procedimento de processar dados em uma ou mais etapas, onde o resultado de cada etapa é utilizado na etapa seguinte, de modo a retornar um resultado combinado.

- Agregações de pipeline
  - filtros
  - operadores
    - $group  - `db.getCollection('restaurants').aggregate([{$group: {_id: "$cuisine", total: {$sum: 1}}}])`
    - $addFields - `db.getCollection('restaurants').aggregate([{$addFields: {"teste": true}}])` - Adiciona campos após uma determinada agregação.
    - lógicos: $and, $or, $not e $nor - `db.getCollection('restaurants').aggregate([{$match: {$and: [{cuisine: "American"}, {borough: "Brooklyn"}]}}])`
    - comparação: > `$gt`, < `lt`, diferente de `$nte`, = `$eq`, <= `$lte`, >= `$gte`,  
  - Funções  $sum, $avg, $max e $min
- Agregações de propósito único
  - count - `db.getCollection('<collection>').count()`
  - distinct - `db.getCollection('<collection>').ditinct()`
