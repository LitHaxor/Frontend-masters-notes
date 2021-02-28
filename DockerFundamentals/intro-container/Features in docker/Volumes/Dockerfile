FROM node:15.10.0-alpine3.10
COPY --chown=node:node . /src
WORKDIR /src
CMD ["node", "index.js"]


# Build Command

## docker build --tag=incrementor .
## docker run incrementor

# Run command

## docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data incrementor