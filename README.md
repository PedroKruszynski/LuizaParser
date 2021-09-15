# LuizaParser (NodeJs Coding Test)

## Index

- [Introduction](https://github.com/PedroKruszynski/LuizaParser#introduction)
  - [Basic Requirements](https://github.com/PedroKruszynski/LuizaParser#requirements)
  - [Application dependencies](https://github.com/PedroKruszynski/LuizaParser#application-dependencies)
  - [Build docker image](https://github.com/PedroKruszynski/LuizaParser#build-docker-image)
  - [Running development](https://github.com/PedroKruszynski/LuizaParser#running-development)
  - [Running build](https://github.com/PedroKruszynski/LuizaParser#running-build)
  - [Running tests](https://github.com/PedroKruszynski/LuizaParser#running-tests)
- [API](https://github.com/PedroKruszynski/LuizaParser#api-endpoints)

## Introduction

That application was developed for an challenge from LuizaLabs. Using NodeJs + Express + Typescript
The Objective are create a parserLog for a log file of the game "Quake 3 arena"
The project was created from a scaffold i use for my projects.

### Requirements

- [NodeJs:14](https://nodejs.org/en/) - NodeJs
- [Typescript:4.4](https://www.typescriptlang.org/) - Typescript
- [Yarn:1](https://yarnpkg.com/) - Yarn OR [NPM:1](https://www.npmjs.com/) - NPM
But you can run the application with docker
- [Docker](https://www.docker.com/) - Docker

#### Application dependencies

You have to copy the '.env.example' file and rename to '.env'
In that file you have the option to choice the port of the app and jwt secret.

``` bash
PORT=3333

JWT_SECRET=0910176063cf5fb1edbd111b23d54081
```

### Build docker image

After create the .env file you can run these following commands to build the image.

``` bash
# Build the image of docker and name it to luiza-parser
docker build -t luiza-parser .

# Criar um container com o nome de luiza-parser and bind the port 3333
docker run --name luiza-parser -d -p 3333:3333 luiza-parser:latest
```

### Running development

Exist scripts in the project root to execute
I prefer yarn but you can choice either npm.

``` bash
# install typescript dependencies
$ yarn

# run typescript server
$ yarn dev:server
```

### Running build

Exist scripts in the project root to execute the build and execute
I prefer yarn but you can choice either npm.

``` bash
# build the application
$ yarn build

# run node server
$ yarn start
```

### Running tests

Exist scripts in the project root to execute all tests made with jest

``` bash

# run all tests of the application
$ yarn test

```

## API Endpoints

All endpois are describe on doc dir, there have two options
Json for Insomnia and a json for Postman
Or you can acess this [Doc](https://documenter.getpostman.com/view/13751794/U16nKjTi) to see all endpoints on Postman

### Thank you! :)

For doubts email me `pedrokruszysnki@gmail.com`.
