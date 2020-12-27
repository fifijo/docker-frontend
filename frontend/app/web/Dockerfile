FROM node:12.20.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json /app
RUN npm install
COPY . .
# RUN npm run start

EXPOSE 3000
CMD ["npm", "run", "start"]



