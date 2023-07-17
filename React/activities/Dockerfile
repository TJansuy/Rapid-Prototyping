FROM node:slim

WORKDIR /app

ENV NODE_OPTIONS --openssl-legacy-provider

EXPOSE 3000

COPY . .

RUN npm install -g react-scripts --silent
RUN npm install --silent

ENTRYPOINT ["npm", "run", "start"]