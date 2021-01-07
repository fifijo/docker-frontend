FROM node:13.12.0-alpine as build-frontend-web-app

RUN mkdir -p /frontend/app/web
WORKDIR /frontend/app/web
COPY frontend/app/web/package*.json ./
RUN npm ci
COPY frontend/app/web/ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-frontend-web-app /frontend/app/web/build /usr/share/nginx/html
ADD /server/nginx/development/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
