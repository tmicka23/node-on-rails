
exports.up = function(knex) {
  return knex.schema
    .createTable('posts', function (table) {
       table.increments('id').notNullable();
       table.string('title', 255).notNullable();
       table.text('content').nullable();
       table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("posts");
};

exports.config = { transaction: true };