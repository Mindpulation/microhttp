'use strict'

const LisDatabase = require('./lib/db/index');
const Database = new LisDatabase();

const Env = require('./lib/env/index');

module.exports = {
  database  : Database,
  env       : {...Env},
}