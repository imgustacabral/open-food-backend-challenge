# Projeto: Planejamento
This is a challenge by [Coodesh](https://coodesh.com/)
## Etapa 1: Seleção da Tecnologia

Para o desafio proposto, a stack tecnológica escolhida foi composta por NestJS, Prisma e PostgreSQL. Cada um desses componentes foi escolhido levando em conta as necessidades específicas do projeto.

**NestJS** foi selecionado devido a várias razões:

- Facilidade na criação de tarefas agendadas (CRON) usando a biblioteca de agendamento (schedule) já integrada.
- Suporte para Elastic Search, permitindo uma pesquisa avançada e eficiente.
- Documentação integrada com Swagger, tornando o entendimento e uso da API muito mais simples.
- Mecanismo eficiente de criação de middleware por meio da criação de "guards".
- Fomenta a adoção de alguns princípios SOLID, como:
  - Single Responsibility Principle (SRP): NestJS estimula a organização do código em módulos, garantindo que cada módulo tenha uma única responsabilidade.
  - Dependency Inversion Principle (DIP): O framework oferece um sistema robusto de injeção de dependências, permitindo a inversão de controle e tornando o código mais flexível e testável.
- Facilita a implementação de Domain-Driven Design (DDD), promovendo um design de software mais robusto e eficiente.

**Prisma** foi escolhido como ORM por sua facilidade de uso e suporte robusto para PostgreSQL, permitindo uma interação eficiente e segura com o banco de dados.

**PostgreSQL** foi selecionado como nosso banco de dados devido à sua confiabilidade, eficiência e capacidade de lidar com grandes volumes de dados e também é um dos requisitos da oportunidade.

