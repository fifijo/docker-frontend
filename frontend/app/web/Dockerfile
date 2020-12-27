FROM node:15.5.0-alpine3.10

RUN mkdir /app
WORKDIR /app

COPY package*.json ./app
COPY . .


CMD ["node", "index.js"]



