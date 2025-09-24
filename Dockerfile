# =========================================
# Stage 1: Build the Node.js in TypeScript Server in Production
# =========================================

ARG NODE_VERSION=22-alpine
FROM node:${NODE_VERSION} AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# =========================================
# Stage 2: Run the built Node.js
# =========================================

FROM node:${NODE_VERSION} AS prod

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json package-lock.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/server.js"]

