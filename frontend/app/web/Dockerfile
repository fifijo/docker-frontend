FROM node:12.20.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./app
COPY . .


CMD ["node", "index.js"]



