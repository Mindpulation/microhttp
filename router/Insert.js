const routesFind = require('./Find');

const { insertOne, insertMany } = require('../lib').database;

async function routesInsert(fastify){

  fastify.post('/one', async function(request, reply) {
    
  })

  fastify.post('/many', async function(request, reply) {
      
  })
  
}

module.exports = routesInsert;