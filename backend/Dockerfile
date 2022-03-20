FROM node:16

WORKDIR /app

COPY . /app/

RUN yarn install
RUN yarn build

EXPOSE 9000
CMD ["sh", "-c", "npx prisma migrate dev --name post && yarn start"]
