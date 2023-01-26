<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1 align="center">
  Boilerplate Nestjs
</h1>

## :rocket: Technology

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [NestJs](https://nestjs.com/)
- [GraphQl](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [Vitest](https://vitest.dev/)

## 💻 About this Project

Api using the nestjs framework, built following a layered architecture, adapted to use Rest and GraphQl, using Prisma as ORM , and to generate a SqLite database. The application contains test coverage with Vitest.

## Getting Started
  
### Run application

```bash
  # Use configured node version
  $ nvm use or install v18.12.1
  
  # Installing dependencies
  $ npm i
  
  # Build project
  $ npm run build
  
  # Run project
  $ npm run dev
```

### Starting database with Prisma

```bash
  # generate schemas
  $ npm run db:schema
  
  # run migrations
  $ npm run migrate
  
  # Preview database
  $ npm run dev
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Pending features

- [ ] tests with Vitest
- [ ] Subscriptions

---

<h4 align="center">
  Code made :black_heart: by <a href="https://www.linkedin.com/in/mateus-alberigi-252294218/" target="_blank">Mat Alberigi</a>
</h4>

