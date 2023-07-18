FROM node:slim

WORKDIR /app

ENV NODE_OPTIONS --openssl-legacy-provider

EXPOSE 3000

COPY ./package.json .
RUN npm install --silent
COPY . .
RUN echo "SKIP_PREFLIGHT_CHECK=true" > ./.env
# RUN npm run build
# RUN rm -rf ./node_modules/

ENTRYPOINT ["npm", "run", "start"]