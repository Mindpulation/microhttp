const { getAll, getOne, getPage, getRange, count } = require('../lib').database;

async function routesFind(fastify){

  fastify.post('/all', async function(request, reply) {
    return {message:"Hello"}
  })

  fastify.post('/one', async function(request, reply) {
    return {message:"Hello"}
  })
  
  fastify.post('/page', async function(request, reply) {
    return {message:"Hello"}
  })

  fastify.post('/range', async function(request, reply) {
    return {message:"Hello"}
  })
  
  fastify.post('/count', async function(request, reply) {
    return {message:"Hello"}
  })

}

module.exports = routesFind;