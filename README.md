# OPEN FOOD CHALLENGE

Este é um desafio proposto pela [Coodesh](https://coodesh.com/).

## Índice

1. [Seleção da Tecnologia](#selecao-da-tecnologia)
2. [Criação da Camada de Aplicação](#criacao-da-camada-de-aplicacao)
3. [Configuração](#configuracao)
4. [Criação da Camada de Infraestrutura](#criacao-da-camada-de-infraestrutura)
5. [Instalação e Configuração Local](#instalacao-e-configuracao-local)
6. [Executando com Docker e Docker Compose](#executando-com-docker-e-docker-compose)

<a name="selecao-da-tecnologia"></a>
## 1. Seleção da Tecnologia

A stack tecnológica escolhida para este desafio inclui NestJS, Prisma e PostgreSQL, selecionadas considerando as necessidades específicas do projeto.

### NestJS

- Facilita a criação de tarefas agendadas (CRON) com a biblioteca de agendamento (schedule) integrada.
- Fornece suporte para Elastic Search, permitindo uma pesquisa avançada e eficiente.
- Integra documentação com Swagger, simplificando o entendimento e uso da API.
- Capacidade de criar middleware de maneira eficiente através de "guards".
- Promove a adoção de princípios SOLID, como Single Responsibility Principle (SRP) e Dependency Inversion Principle (DIP).
- Facilita a implementação de Domain-Driven Design (DDD), promovendo um design de software robusto e eficiente.

### Prisma

Escolhido como ORM pela sua facilidade de uso e robusto suporte para PostgreSQL, facilitando a interação segura e eficiente com o banco de dados.

### PostgreSQL

Selecionado como o banco de dados devido à sua confiabilidade, eficiência, capacidade de lidar com grandes volumes de dados e também por ser um dos requisitos do desafio.

### Elasticsearch

Elasticsearch é uma ferramenta de pesquisa e análise de código aberto. Ele fornece uma maneira escalonável e fácil de pesquisar e analisar dados em tempo real é capaz de lidar com grandes volumes de dados de forma eficiente e rápida.

### Kibana

Permite a criação de dashboards personalizados para análise em tempo real dos dados armazenados no Elasticsearch.

<a name="criacao-da-camada-de-aplicacao"></a>
## 2. Criação da Camada de Aplicação

A camada da aplicação foi criada para ser agnóstica a qualquer utilitário externo, como o banco de dados. Foram criados os domínios da aplicação (Product e Server Status), bem como suas entidades, além de analisar os endpoints da aplicação e os respectivos casos de uso. Os repositórios ProductsRepository, CronJobRepository e ServerStatusRepository representam os contratos das operações que devem existir em qualquer repositório externo.

Os casos de uso incluem:

- **index-product**: usado pelo cron job para indexar no elasticsearch.
- **search-products**: retorna produtos indexados no elasticsearch relacionados ao texto passado na rota.
- **create-product**: usado pelo cron job.
- **register-cron-job**: registra quando o cronjob foi executado, seus erros, etc.
- **get-server-status**: retorna as informações do status servidor.
- **delete-product-by-code**: para realizar soft delete.
- **get-products**: com opções skip e take para obter uma faixa de produtos.
- **update-product-by-code**: para realizar updates no produto via HTTP.
- **get-product-by-code**: para obter informações de um único produto.

Os testes unitários utilizam uma abordagem de banco de dados em memória, realizando operações em um array na memória em todos casos de uso.

<a name="configuracao"></a>
## 3. Configuração

As variáveis de ambiente necessárias para a execução do projeto incluem DATABASE_URL, API_KEY e OPEN_FOOD_FACTS_BASE_URL. Utilizei o zod para a tipagem do process.env, criando um namespace global que declara o ProcessEnv conforme o parse realizado.

<a name="criacao-da-camada-de-infraestrutura"></a>
## 4. Criação da Camada de Infraestrutura

A camada de infraestrutura conta com três módulos:

- **CRON**: Serviço de importação de Products, programado para executar todos os dias às 3AM.
- **Database**: Gerencia os ORMs e/ou repositórios externos.
- **HTTP**: Permite a comunicação REST, com operações de GET, PUT e DELETE, e documentação com Swagger.

### CRON

O módulo CRON utilizou o agendador do próprio NestJS, com requisições feitas através do axios. A otimização do uso de memória foi um desafio, superado através do uso de streams do node, permitindo carregar o arquivo na memória aos poucos.

### DATABASE

No módulo Database, foram criados mappers do Prisma para a camada de domínio e vice-versa, além dos repositórios do Prisma que implementam os contratos da camada de aplicação.

### HTTP

- **DTOs**: Implementados com class-transformer e class-validator para garantir consistência e validação dos dados.
- **View-Models**: Criados para estruturar e organizar os dados retornados pela API.
- **Controllers**: Servem como o ponto de entrada para lidar com as solicitações HTTP.
- **Middleware**: Implementado para verificar a existência da API KEY, desempenhando a função de autorização na API.

Decorators foram adicionados ao longo de cada etapa para auxiliar na documentação da API.

<a name="instalacao-e-configuracao-local"></a>
## 6. Instalação e Configuração Local

1. Se estiver usando nvm, acesse o diretório do projeto e execute `nvm install`.
2. Configure o `.env` com base no `.env.example`.
3. Execute `npm install` para instalar as dependências do projeto.
4. Execute `npx prisma migrate deploy` para aplicar as migrações do banco de dados.
5. Execute `npx prisma generate` para gerar os artefatos do Prisma.
6. Compile o projeto com `npm run build`.
7. Inicie a aplicação com `npm run start:prod`. 

**Para acessar a documentação deve rodar `npm run start:dev` e acessar a rota /api**

<a name="executando-com-docker-e-docker-compose"></a>
## 7. Executando com Docker e Docker Compose

1. Configure o `.env` com base no `.env.example`.
2. Execute `docker volume create open-food-elasticsearch` para criar o volume do elasticsearch.
3. Execute `docker-compose up` para iniciar o projeto em um contêiner Docker.
