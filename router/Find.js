const { optFindAll, optCount, optFindOne, optFindPage, optFindRange } = require('../lib').opt;
const { getAll, getOne, getPage, getRange, count } = require('../lib').database;

const res = require('../lib').wrap;

async function routesFind(fastify){

  fastify.post('/all', optFindAll, async function(request, reply) {
    const {param, field, sort} = request.body;
    const dbData = await getAll(param, field, sort);
    return res(true, dbData);
  })

  fastify.post('/one', optFindOne ,async function(request, reply) {
    const {param, field} = request.body;
    const dbData = await getOne(param, field);    
    return res(true, dbData);
  })
  
  fastify.post('/page', optFindPage ,async function(request, reply) {
    const {page, len, param, field, sort} = request.body
    const dbData = await getPage(page, len, param, field,sort);
    return res(true, dbData);
  })

  fastify.post('/range', optFindRange ,async function(request, reply) {
    const {start, end, param, field, sort} = request.body    
    const dbData = await getRange(start, end, param, field, sort);
    return res(true, dbData);
  })
  
  fastify.post('/count', optCount ,async function(request, reply) {
    const {param} = request.body
    const dbData = await count(param);
    return res(true, dbData);
  })

}

module.exports = routesFind;