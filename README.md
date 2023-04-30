# Starter React Graphql Apollo Prisma

<div align="center">
  <img src="https://user-images.githubusercontent.com/46073105/234059260-bf14f1b2-3d7f-4084-85bf-f0e5a1ad77e5.png" width="60%">
  <p>Setting up a project fullstack with Node, Typescript, React, Vite, Graphql, Apollo, Codegen and Prisma.</p>
</div>

## Tools

- [Graphql](https://graphql.org/) A query language for your API.
- [Apollo-server](https://www.apollographql.com/docs/apollo-server) Spec-compliant GraphQL server that's compatible with any GraphQL client.
- [Prisma](https://www.prisma.io/) Next-generation Node.js and TypeScript ORM.
- [Postgres](https://www.postgresql.org/) The Open Source Relational Database.
- [React](https://react.dev/) The library for web and native user interfaces.
- [Apollo-client](https://www.apollographql.com/docs/react) A comprehensive state management library for JavaScript.
- [Typescript](https://www.typescriptlang.org/) JavaScript with syntax for types.
- [Codegen](https://the-guild.dev/graphql/codegen/) Generate code from GraphQL schema.
- [Prettier](https://prettier.io/) Code formatter.
- [ESLint](https://eslint.org/) Find and fix problems in JavaScript and typescript code.
- [Prettier](https://prettier.io/) Code formatter.
- [husky](https://typicode.github.io/husky) Husky improves your commits.
- [TailwindCss](https://tailwindcss.com/) A utility-first CSS framework.
- [MaterialUI](https://mui.com/) Move faster with intuitive React UI tools

## Getting starting

### Prerequisites

- `node`
- `npm`

### Dependencies

Install all dependencies :

```sh
npm run pre:install
```

Install only dependencies of api :

```sh
cd api && npm install
```

Install all dependencies :

```sh
cd client && npm install
```

### Environment variables

Creates the .env file in the root directory of the api folder :

```sh
cd api && touch .env
```

In the .env, set your postgres database url and the port.

Example :

```sh
PORT=4500
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Creates the .env file in the root directory of the client folder :

```sh
cd client && touch .env
```

In the .env, set your api url.

Example :

```sh
VITE_GRAPHQL_URL="http://localhost:4040/graphql"
```

### Database

To map your data model to the database schema, you need to use the prisma migrate :

```sh
npm run db:migrate
```

When the 1st migration is executed, add the 1st data :

```sh
npm run db:seed
```

### Start the app

Run your GraphQL server and your React app with this command :

```sh
npm run dev
```

Navigate to http://localhost:{yourport} in your browser to explore the API with the Apollo Playground.

Navigate to http://localhost:8080 in your browser to run the React app.
