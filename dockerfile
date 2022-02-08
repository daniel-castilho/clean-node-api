FROM node:14
WORKDIR /daniel/src/clean-node-api
RUN npm install --only=prod
