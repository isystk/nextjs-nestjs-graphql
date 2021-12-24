FROM node:16.13.1-alpine3.13

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add bash

COPY app/ /app/
COPY app/.env.docker ./.env

RUN yarn install
RUN npm install -g npm@8.3.0

EXPOSE 3000
EXPOSE 5555
