FROM node:16.13.1-alpine3.13

WORKDIR /usr/src

RUN apk update && \
    apk upgrade && \
    apk add bash

COPY app/.env.docker ./.env

EXPOSE 3000
EXPOSE 5555
