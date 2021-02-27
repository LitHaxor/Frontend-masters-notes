# Build Stage

FROM node:15.10.0alpine3.10 AS build

WORKDIR /app

COPY . .

RUN npm ci && npm run build



#  Runtime Stage

FROM nginx:1.19.7-alpine 

COPY --from=build /app/build  /usr/share/nginx/html