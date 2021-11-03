import nconf from 'nconf';

const env = nconf.get('NODE_ENV') || 'development';
const config = require('../knexfile')[env];

module.exports = require('knex')(config);
