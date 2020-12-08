'use strict'

const LisDatabase = require('./lib/db/index');
const Database = new LisDatabase();

const Wrap = require('./lib/setting/wrap');
const Opt = require('./lib/setting/index');
const Env = require('./lib/env/index');

module.exports = {
  database  : Database,
  env       : {...Env},
  opt       : {...Opt},
  wrap      : Wrap
}