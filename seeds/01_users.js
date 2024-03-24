/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            user_id: 1,
            username: "tester",
            password: "password123"
        },
        {
            user_id: 2,
            username: "player",
            password: "password1234"
        }
    ]);
};
