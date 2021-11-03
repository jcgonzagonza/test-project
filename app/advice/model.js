import { Model } from 'objection';
const { db } = require('../../db/init');

Model.knex(db);

class Advice extends Model {
  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  static get tableName() {
    return 'advices';
  }
}

const insertAdvice = async (props) => {
  return Advice.query().insert(props).returning('*');
};

export { Advice as default, insertAdvice };
