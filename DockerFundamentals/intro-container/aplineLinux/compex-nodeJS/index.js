const hapi = require("@hapi/hapi");

async function start() {
  const server = hapi.server({
    host: "127.0.0.1",
    port: process.env.PORT || 5000
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true };
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