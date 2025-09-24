ARG NODE_VERSION=22-alpine
FROM node:${NODE_VERSION} AS dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
