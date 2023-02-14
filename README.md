# My Garage Api

Based on <https://www.freecodecamp.org/news/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9/>

# Installation

## Clone project

```bash
git clone https://github.com/alpliar/garage-api
cd garage-api
yarn install
```

## Setup environment variables

```bash
touch .env
echo "DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_DOMAIN=
DATABASE_NAME=">> .env
```

Fill variables with your own server options

## Usage

### Generate seeds

Execute to generate seeds into database

```bash
yarn seed
```

### Launch API Server

```bash
yarn start
```

## API Documentation

This project uses swagger, which is available at /documentation
