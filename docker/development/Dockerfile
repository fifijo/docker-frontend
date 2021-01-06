FROM node:13.12.0-alpine as build-frontend-web-app

RUN mkdir -p /frontend/app/web
WORKDIR /frontend/app/web
COPY frontend/app/web/package*.json ./
RUN npm ci --silent
COPY frontend/app/web/ ./
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build-frontend-web-app /frontend/app/web/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
