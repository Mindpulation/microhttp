const lib = require('../lib');
const { insertOne, insertMany } = lib.database;
const { optInsertOne, optInsertMany } = lib.opt;
const res = lib.wrap;

async function routesInsert(fastify){

  fastify.post('/one', optInsertOne ,async function(request) {
    const {param} = request.body    
    const sta =  await insertOne(param);    
    return res(sta);
  })

  fastify.post('/many', optInsertMany ,async function(request) {
    const {param} = request.body
    const sta =  await insertMany(param);
    return res(sta);
  })
  
}

module.exports = routesInsert;