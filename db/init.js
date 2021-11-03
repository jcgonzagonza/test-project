import knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';
import nconf from 'nconf';

import knexConfig from '../knexfile';

const env = nconf.get('NODE_ENV') || 'development';
console.log('***ENV: ', env);
const db = knex({ ...knexConfig[env], ...knexSnakeCaseMappers() });
console.log('***db: ', db);

Model.knex(db);

export default db;
