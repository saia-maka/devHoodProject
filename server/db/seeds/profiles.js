exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 1, username: 'banana', password: 'mrbanana' },
        { id: 2, username: 'orange', password: 'mrorange' },
        { id: 3, username: 'apple', password: 'mrapple' },
      ])
    })
}
