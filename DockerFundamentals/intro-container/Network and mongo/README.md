# Docker network

**To see available networks:**

```
docker network ls
```

**To create bridge network:**

```
docker network create --driver=bridge name_of_network
```

**To run the docker with network:**

**1.Create mongo server**

```
 docker run -d --network=app-net -p 27017:27017 --name=db --rm mongo:4.2.12-bionic
```

**2.Connect client with mongo in the network:**

```
docker run -it --network=app-net --rm mongo:4.2.12-bionic mongo --host db
```

## Node App

**Installation:**

```
npm i mongodb @hapi/hapi hapi-pino
```

**/server.js**
```
const hapi = require("@hapi/hapi");
const { MongoClient } = require("mongodb");
const url = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017";
const dbName = "dockerApp";
const collectionName = "count";

async function start() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const server = hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  });

  server.route({
    method: "GET",
    path: "/",
    async handler() {
      const count = await collection.count();
      return { success: true, count };
    }
  });

  server.route({
    method: "GET",
    path: "/add",
    async handler() {
      const res = await collection.insertOne({});
      return { inserted: res.insertedCount };
    }
  });

  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true
    }
  });

  await server.start();

  return server;
}

start().catch(err => {
  console.log(err);
  process.exit(1);
});
```


**Running the app:**
