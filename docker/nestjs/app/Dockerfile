FROM node:16.13.1-alpine3.13

WORKDIR /usr/src

RUN apk update && \
    apk upgrade && \
    apk add bash

RUN yarn install

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate dev --name post && yarn start"]
