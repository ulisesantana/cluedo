FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build

  FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
