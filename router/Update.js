const lib = require('../lib');
const { updateOne, updateMany } = lib.database;
const { optUpdate } = lib.opt;
const res = lib.wrap;

async function routesUpdate(fastify){

  fastify.put('/one', optUpdate ,async function(request) {
    const {param, change} = request.body
    const sta =  await updateOne(param, change);
    return res(sta);
  })

  fastify.put('/many', optUpdate ,async function(request) {
    const {param, change} = request.body
    const sta =  await updateMany(param, change);
    return res(sta);
  })

}

module.exports = routesUpdate;