FROM node:14
WORKDIR /daniel/src/clean-node-api
COPY package.json .
RUN npm install --only=prod
