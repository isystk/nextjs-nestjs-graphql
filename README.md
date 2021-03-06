ð nextjs-nestjs-graphql
====

[![isystk](https://circleci.com/gh/isystk/nextjs-nestjs-graphql.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)
![GitHub issues](https://img.shields.io/github/issues/isystk/nextjs-nestjs-graphql)
![GitHub forks](https://img.shields.io/github/forks/isystk/nextjs-nestjs-graphql)
![GitHub stars](https://img.shields.io/github/stars/isystk/nextjs-nestjs-graphql)
![GitHub license](https://img.shields.io/github/license/isystk/nextjs-nestjs-graphql)

## ð ãã­ã¸ã§ã¯ãã®æ¦è¦

Next.jsï¼ãã­ã³ãã¨ã³ãï¼ã»Nest.jsï¼ãµã¼ãã¼ãµã¤ãï¼ã»GraghQLãå©ç¨ãããµã³ãã«ã¢ããªã±ã¼ã·ã§ã³ã§ãã


### å©ç¨ãã¦ããæè¡

- Next.js
- typescript 4
- material-ui
- redux-toolkit
- Apollo Client
- Nest.js
- Prisma
- GraphQL


## ð Demo

![æç¨¿ä¸è¦§ç»é¢](./app1.png "æç¨¿ä¸è¦§ç»é¢")
![æç¨¿ç»é¢](./app2.png "æç¨¿ç»é¢")

- ã­ã°ã¤ã³/ã­ã°ã¢ã¦ã
- ä¼å¡ç»é²
- æç¨¿ä¸è¦§
- æç¨¿è©³ç´°
- ãã¤ãã¼ã¸ï¼ä¸è¦§ã»ç»é²ã»æ´æ°ã»åé¤ï¼


## ð¦ ãã£ã¬ã¯ããªæ§é 

```
.
âââ docker/
â   âââ mysql/
â   âââ nestjs/
â   â   âââ app/ (Nest.js ã®ã½ã¼ã¹ã³ã¼ã)
â   â       âââ prisma/
â   â       âââ src/
â   â       âââ test/
â   âââ docker-compose.yml
âââ frontend/
    âââ src/ (Next.js ã®ã½ã¼ã¹ã³ã¼ã)
    â   âââ @types/
    â   âââ auth/
    â   âââ common/
    â   âââ components/
    â   âââ pages/
    â   âââ store/
    â   âââ styles/
    â   âââ utilities/
    âââ test/
```

## ð¬ ä½¿ãæ¹

### ãã¼ã¿ãã¼ã¹ã®æºå
```
# ä¸æºå
$ ./dc.sh init

# Dockerãèµ·åãã
$ ./dc.sh start

# ãã¼ã¿ãã¼ã¹ã¨PHPãç«ã¡ä¸ããã¾ã§å°ãå¾ã¡ã¾ãã(ååã¯5åç¨åº¦)

# MySQLã«ã­ã°ã¤ã³ãã¦ã¿ã
$ ./dc.sh mysql login

# Dockerãåæ­¢ããå ´å
$ ./dc.sh stop
```

### ããã¯ã¨ã³ãã®æºå
```
$ cd backend
$ cp .env.example .env
$ yarn
$ npx prisma generate
$ npx prisma migrate dev --name post
$ yarn start
```

#### GraghQLã®ä½¿ãæ¹
http://localhost:9000/graphql

![graphql](./graphql.png "graphql")
```
# ä»¥ä¸ã®ããã«å¿è¦ãªãã£ã¼ã«ãã®ã¿ãæå®ãã¦ãã¼ã¿ãåå¾ã§ãã¾ãã
-----
query { 
  getPosts {
    id
    title
    description
    photo
    createdAt
    updatedAt
    authorId
  }
}
-----

# Curlã§éä¿¡ããå ´åã¯ä»¥ä¸ã®ããã«JSONã«ãã¦æ¹è¡ãåé¤ããå¿è¦ãããã¾ãã
-----
$ QUERY=$(cat <<EOS
{   "query": "{
     getPosts {
        id
        title
        description
        photo
        createdAt
        updatedAt
        authorId
      }
    }"
}
EOS
) && QUERY=$(echo $QUERY | tr -d '\n')
$ curl -X POST -d "${QUERY}" -H 'Content-Type: application/json' http://localhost:9000/graphql
-----

# ãã¼ã¿ãç»é²ããå ´åã¯Mutationãå©ç¨ãã¾ãã
-----
# ã¦ã¼ã¶ç»é²
mutation {
    signup(
      email: "test@test.com"
    	password: "test1234"
      name: "test"
    ) {
    token
  }
}

ï¼ æç¨¿
mutation {
  createPost(
    title:"titleA", 
    description:"textA", 
    photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAGQAZAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAwII/8QALBAAAgICAQMDAwIHAAAAAAAAAAECAwQRBRITIRQxQRUWUSJhBiMyM0Jxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnkXLHone67JqC301x6pP/S+QOgKbiuflyHHZ3I3Y0qI4ltsFCa1JRgk/1L4ZH4Plee5OdFt8uJ7M4KyyuqyTtgmtrx7J+wGhBnPuLkux9Z9Dj/Se70dXcfe6Ovp7mta1vzr30XuXl4+DjTy8qbhVWtzkouWl+dLyB2BHjyGHPLWFXcpXOpXdMU2uhvSe/Zb+PPkj83y30fAsy1iX5Eoxk1GqDkk0t7k/hfuBYApOQ5vKxuDw8+iuj1GY6IRVjarUp6b386S2eauY5LF43K5Pk3x99VUV2lhTlLrnvXS2/wAtpf8AQL0FPh8ny1XIU4HNYmNW8uE5Uzom5JSituEtr3097X4ZcAAAAAAGe4ui6PH83CzBlc7M3JcaZNw7sWl4T/D/ACQqacHKy+LXB8Ldg349ynfKWNKpV1KL6oSk0urfheNmuAGO/n/bv2l6HJ9Xv0u+zLt9vr/udeunXT5997NRyWRDFwbrp488hKDXajHqdjfhR1+5JAGb/hTCyuHuv43Ox33boxvhdFNx6dJdrqe/6PZefK8lvzUJ2cPnQri5SljWJJLbb6X4JoAz2TXTHgOLWfw086qqNLtrUW5Vahrq6P8ALT8NfuVt/Hyz3yORwfHWUYroqca5UulX312KacYtL4Wt6+TZgCgjlfWuZ467GxcmFWErbbZ3Uyr1KUOhQXUlt/qbevHgvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
    authorId: 1
  ) {
    id
  }
}
-----
```

#### Prisma Studio ãèµ·åãã
```
$ cd backend
$ npx prisma studio
```
![prisma](./prisma.png "prisma")

### ãã­ã³ãã¨ã³ãç¨
```
$ cd frontend
$ cp .env.example .env
$ yarn
$ yarn dev
```
http://localhost:3000

## ð¨ åè

| ãã­ã¸ã§ã¯ã| æ¦è¦|
| :---------------------------------------| :-------------------------------|
| [TypeScript + Prisma + NestJSã§GraphQLãµã¼ããä½ã£ã¦ã¿ã](https://zenn.dev/rince/articles/50a66241d04f0b)| TypeScript + Prisma + NestJSã§GraphQLãµã¼ããä½ã£ã¦ã¿ã |


## ð« Licence

[MIT](https://github.com/isystk/nextjs-nestjs-graphql/blob/master/LICENSE)

## ð Author

[isystk](https://github.com/isystk)

