const { PORT } = require('./lib').env;

const fastify = require('fastify')();

fastify.register(require('fastify-cors'));

fastify.register(require('./router/Find'),    {prefix:'/api/find'});
fastify.register(require('./router/Insert'),  {prefix:'/api/insert'});
fastify.register(require('./router/Update'),  {prefix:'/api/update'});
fastify.register(require('./router/Delete'),  {prefix:'/api/delete'});


fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`This service running in PORT ${PORT}`);
});