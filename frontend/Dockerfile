FROM node:16.13.1-alpine3.13

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add bash

COPY . /app/

# Add libvips
RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["sh", "-c", "yarn start"]
