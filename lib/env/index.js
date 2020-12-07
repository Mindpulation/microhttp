const dotenv = require('dotenv');
dotenv.config();

const ob = process.env;

module.exports = {
  PORT:ob.port, 
  MONGO_URL:ob.mongo_url,
  MONGO_DAB:ob.mongo_dab,
  MONGO_COL:ob.mongo_col
}