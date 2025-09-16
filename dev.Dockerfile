# dev.Dockerfile
ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS dev

# Ustawienie katalogu roboczego
WORKDIR /usr/src/app

# Skopiowanie package.json i package-lock.json
COPY package.json package-lock.json ./

# Instalacja wszystkich zależności (dev + prod)
RUN npm ci

# Skopiowanie reszty plików
COPY . .

# Eksponowanie portu dla dev
EXPOSE 4000

# Uruchomienie TS bezpośrednio przez ts-node
CMD ["npm", "run", "dev"]
