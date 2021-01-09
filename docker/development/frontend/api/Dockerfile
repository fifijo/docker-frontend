FROM node:13.12.0-alpine as build-frontend-api

WORKDIR /app
COPY frontend/api/package*.json ./
RUN npm i
COPY frontend/api/ ./
CMD npm run dev
