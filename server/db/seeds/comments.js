/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 1,
      comment_id: 1,
      comment_owner: 'apple',
      comment: 'Dont see why you cant just google it tbh',
    },
    {
      id: 2,
      comment_id: 1,
      comment_owner: 'orange',
      comment: 'Thats abit harsh, apple',
    },
    {
      id: 3,
      comment_id: 3,
      comment_owner: 'banana',
      comment: 'Yeah why dont you google it bro',
    },
  ])
}
