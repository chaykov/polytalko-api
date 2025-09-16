# =========================================
# Stage 1: Build the Node.js in TypeScript Server in Production
# =========================================

ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx tsc

# =========================================
# Stage 2: Run the built Node.js
# =========================================

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]

