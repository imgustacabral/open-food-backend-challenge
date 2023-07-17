# OPEN FOOD CHALLENGE

Este é um desafio proposto pela [Coodesh](https://coodesh.com/).

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

## 2. Criação da Camada de Aplicação

A camada da aplicação foi criada para ser agnóstica a qualquer utilitário externo, como o banco de dados. Foram criados os domínios da aplicação (Product e Server Status), bem como suas entidades, além de analisar os endpoints da aplicação e os respectivos casos de uso. Os repositórios ProductsRepository, CronJobRepository e ServerStatusRepository representam os contratos das operações que devem existir em qualquer repositório externo.

Os casos de uso incluem:

- **create-product**: usado pelo cron job.
- **register-cron-job**: registra quando o cronjob foi executado, seus erros, etc.
- **get-server-status**: retorna as informações do status servidor.
- **delete-product-by-code**: para realizar soft delete.
- **get-products**: com opções skip e take para obter uma faixa de produtos.
- **update-product-by-code**: para realizar updates no produto via HTTP.
- **get-product-by-code**: para obter informações de um único produto.

