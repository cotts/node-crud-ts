# NODE CRUD TS

Book CRUS basic usint Typescript

## Stack

> Node.js  
> Express  
> Typescript  
> TSLint  
> Prettier  
> Mongoose

<br/>

## API Routes

`GET /api/v1/` - Get All Books (skip and limit can be passed as query)  
`GET /api/v1/:id` - Get Book by id  
`POST /api/v1/` - Create Book  
`PUT /api/v1/` - Update Book  
`DELETE /api/v1/:id` - Delete Book By id

<hr/>
<br/>

## How to run

1- Install dependencies

```bash
npm i
##or
yarn
```

2- Set environment keys

```bash
PORT=         # Server Port:Default 5000
DB_HOST=      # Database Host (mongoDB)
DB_USER=      # Database user
DB_PASS=      # Database password
DB_NAME=      # Database name
```

3 - Run Service

> 3.1 - In Development Mode

```bash
npm run dev
#or
yarn dev
```

> 3.2 - In Production Mode

```bash
npm start
#or
yarn start
```
