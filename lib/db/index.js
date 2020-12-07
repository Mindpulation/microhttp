const env = require('../env/index');
const {Mongooo, Find, Save, Delete, Update} = require('mongooo');

const {find,findOne,findPage,findRange,getCount} = Find;

const {save,saveMany} = Save;

const {set,setMany} = Update;

const {del,delMany} = Delete


const mongo = new Mongooo();

let client = null;

class Database{ 

  constructor(){    
    (async()=>{
      client = await mongo.setup(env.MONGO_URL, env.MONGO_DAB, env.MONGO_COL);
    })();       
  }

  async getAll(param = {}, field = {}, sort = {}){
    return await find(client, param, field, sort);
  }

  async getOne(param = {}, field = {}){
    return await findOne(client, param, field);
  }

  async getPage(page = 0, len = 0, param = {}, field = {}, sort = {}){
    return await findPage(client, page, len, param, field, sort);
  }

  async getRange(start = 0, end = 0, param = {}, field = {}, sort = {}){
    return await findRange(client, start, end, param, field, sort);
  }

  async count(param={}){
    return await getCount(client, param);
  }

  async insertOne(param={}){
    return await save(client, param);
  }

  async insertMany(param=[]){
    return await saveMany(client, param);
  }

  async updateOne(param={}, change={}){
    return await set(client, param, change);
  }

  async updateMany(param={}, change={}){
    return await setMany(client, param, change);
  }

  async deleteOne(param={}){
    return await del(client, param);
  }

  async deleteMany(param={}){
    return await delMany(client, param);
  }

}

module.exports = Database;

