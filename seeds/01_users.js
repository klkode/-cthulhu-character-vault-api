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
            password: "$2b$10$mjmMyl0Xo/mJhpUi6x5w7uzUKYizHjjBFY/uE3TVPAW0HnmmXJKnW"
        },
        {
            user_id: 2,
            username: "player",
            password: "$2b$10$2HWjKyMdLRfaqbbVo.NQ6uxoFTyN9vVV/tGbuE25r04nCIUzeQ79G"
        }
    ]);
};
