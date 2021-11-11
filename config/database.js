const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'root0123',
      database : 'node_on_rails_development'
    }
  });

// Give the knex instance to objection.
Model.knex(knex);

module.exports = {
    knex,
    Model
}