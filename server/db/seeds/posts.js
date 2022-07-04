// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          post_id: 1,
          post_owner: 'banana',
          post: 'What is flex box?',
          type: 'css',
        },
        {
          id: 2,
          post_id: 1,
          post_owner: 'banana',
          post: 'What is react router?',
          type: 'react',
        },
        {
          id: 3,
          post_id: 3,
          post_owner: 'apple',
          post: 'Why do I get merge conflicts in github?',
          type: 'git',
        },
      ])
    })
}
