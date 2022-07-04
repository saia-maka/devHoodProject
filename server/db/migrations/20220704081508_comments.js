exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.integer('post_id')
    table.string('comment_owner')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
