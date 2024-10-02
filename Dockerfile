FROM registry.access.redhat.com/ubi9/nodejs-20:latest

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
