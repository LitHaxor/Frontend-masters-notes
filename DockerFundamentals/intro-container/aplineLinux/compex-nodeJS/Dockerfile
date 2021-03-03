# Bulid stage
FROM node AS build

WORKDIR /build

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

# runtime stages

FROM alpine:3.10 AS stage

RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node

USER node

RUN mkdir /home/node/src

COPY --from=build --chown=node:node /build .

WORKDIR /home/node/src

CMD ["node", "index.js"]


