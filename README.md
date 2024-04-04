<h4 align="center">
  <br />
  
  <img src=".assets/icon.png">

  <br />
  <br />

Aplicação desenvolvida com NodeJs, Express e MongoDB para dispolibilizar uma RESTful, além de integrar o GraphQL para fornecer uma camada adicional de consulta flexível e eficiente.

</h4>

<p align="center">Data de criação: Apr 4, 2024</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/ericneves/mySeries?display_timestamp=author&style=flat-square&logo=github&labelColor=%235961FF&color=%23333333" alt="Github">
  <img src="https://img.shields.io/github/languages/top/ericneves/mySeries?style=flat-square&logo=javascript&labelColor=%23556066&color=%2379A55B">
  <img src="https://img.shields.io/github/license/ericneves/mySeries?style=flat-square&logo=github&labelColor=%231F2937&color=%23374151">
</p>

<img src=".assets/graphql.png"><img src=".assets/rest.png">

#### Intro

Este projeto apresenta um aplicativo construído com **Node.js**, **Express** e **MongoDB**, proporcionando uma **API RESTful** para interagir com os dados. Além disso, ele incorpora o **GraphQL** para oferecer uma alternativa poderosa de consulta de dados.

**GraphQL** vem como uma alternativa para resolver **2 problemas** de **Rest APIS**, que é o caso de **Over-fetching** e **Under-fetching**.

> [!NOTE]
>
> - **Over-fetching**: Este problema ocorre quando a API retorna mais dados do que o necessário para uma determinada solicitação.
> - **Under-fetching**: Este problema acontece quando uma solicitação não fornece informações suficientes, levando o cliente a fazer várias solicitações adicionais para obter os dados necessários.

#### Features

- 🗃️ Padrão Layered Architecture
- 🐙 Criar usuário
- 🔑 Autenticação - JWT
- 👾 Informações do Usuário
- 🕸️ GraphQL
  - Query
    - ✅ Informações do Usuário
  - Mutation
    - ✅ Atualizar Informações do Usuário
- ⚡ Dependencies:
  - @apollo/server `4.10.2`
  - bcrypt `5.1.1`
  - cors `2.8.5`
  - express `4.19.2`
  - graphql `16.8.1`
  - jsonwebtoken `9.0.2`
  - mongoose `8.2.4`

#### Execute

> [!NOTE]
> Siga os passos abaixo para a execução do projeto.

```sh

# Clone
$ git clone https://github.com/EricNeves/quickstartGraphQL.git

# Project Folder
$ cd quickstartGraphQL

# Install Deps
$ cd www && pnpm install

# Execute Docker - ./quickstartGraphQL
$ docker-compose up -d --build

```

#### Quickstart

```sh

$ curl http://localhost:3030

{
	"author": "Eric Neves <github.com/ericneves>",
	"message": "🚀 Welcome to the api!"
}

```

```sh

$ curl -X POST \
  -d '{ "name": "admin", "email": "admin@test.com", "password": "admin" }' \
  -H "Content-Type: application/json" \
  http://localhost:3030/users

{
  "id": "660ebf9dc1f55ee8a836f218",
  "name": "admin",
  "email": "admin@test.com",
}

```

```sh

$ curl -X POST \
  -d '{ "email": "admin@test.com", "password": "admin" }' \
  -H "Content-Type: application/json" \
  http://localhost:3030/users/login

{
  "jwt": "your-token"
}

```