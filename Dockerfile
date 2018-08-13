FROM node:latest

RUN npm install express
RUN npm install morgan
RUN npm install winston@next
#RUN npm install mdi

WORKDIR /app
