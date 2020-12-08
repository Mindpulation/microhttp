const lib = require('../lib');
const { deleteOne, deleteMany } = lib.database;
const { optDelete } = lib.opt;
const res = lib.wrap;

async function routesDelete(fastify){

  fastify.delete('/one', optDelete ,async function(request) {
    const {param} = request.body
    const sta =  await deleteOne(param);
    return res(sta);
  })
  
  fastify.delete('/many', optDelete ,async function(request) {
    const {param} = request.body
    const sta =  await deleteMany(param);
    return res(sta);
  })
  

}

module.exports = routesDelete;