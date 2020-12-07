const fastify = require('fastify')({
  http2 : true
});

fastify.register(require('./router/Find'),    {prefix:'/api/f'});
fastify.register(require('./router/Insert'),  {prefix:'/api/i'});
fastify.register(require('./router/Update'),  {prefix:'/api/u'});
fastify.register(require('./router/Delete'),  {prefix:'/api/d'});

const start = async () => {
  try {
    await fastify.listen(3000)    
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();