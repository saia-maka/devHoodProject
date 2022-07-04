exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.integer('post_id')
    table.string('post_owner')
    table.string('post')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
