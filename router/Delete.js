const { deleteOne, deleteMany } = require('../lib').database;

async function routesDelete(fastify){

  fastify.post('/one', async function(request, reply) {
      
  })
  
  fastify.post('/many', async function(request, reply) {
      
  })
  

}

module.exports = routesDelete;