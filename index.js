const { PORT } = require('./lib').env;

const numCPU  = require('os').cpus().length;
const fastify = require('fastify')();
const cluster = require('cluster');

if(cluster.isMaster){
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }
}else{
  fastify.register(require('fastify-cors'));
  fastify.register(require('./router/Find'), {prefix:'/api/find'});
  fastify.register(require('./router/Insert'), {prefix:'/api/insert'});
  fastify.register(require('./router/Update'), {prefix:'/api/update'});
  fastify.register(require('./router/Delete'), {prefix:'/api/delete'});
  
  fastify.listen(PORT, function (err) {
    if (err) {console.log(err);process.exit(1)}
    console.log(`This service running in PORT ${PORT}`);
  });
}
