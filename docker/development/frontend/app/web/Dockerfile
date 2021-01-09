FROM node:13.12.0-alpine as build-frontend-web-app

RUN mkdir -p frontend/app/web
WORKDIR /frontend/app/web
COPY frontend/app/web/package*.json ./
RUN npm i
COPY frontend/app/web/ ./

FROM nginx:stable-alpine
COPY /server/nginx/development/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
