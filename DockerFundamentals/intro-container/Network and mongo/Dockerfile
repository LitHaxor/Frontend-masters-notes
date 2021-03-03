FROM node:15.10.0-alpine3.10

RUN npm i -g nodemon

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .


CMD ["nodemon", "server.js"]