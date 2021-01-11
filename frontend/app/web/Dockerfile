FROM node:13.12.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 9000
