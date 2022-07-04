exports.up = function (knex) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id')
    table.string('username')
    table.string('password')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
