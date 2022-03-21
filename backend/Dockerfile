FROM node:16.13.1-alpine3.13

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add bash

COPY . /app/

RUN yarn install
RUN yarn build

EXPOSE 9000
CMD ["sh", "-c", "npx prisma migrate dev --name post && yarn start"]
