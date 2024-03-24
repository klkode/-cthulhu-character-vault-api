/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('backgrounds').del();
    await knex('backgrounds').insert([
        {
            background_id: 1,
            name: "Antiquarian",
            credit_rating_min: 30,
            credit_rating_max: 50,
            skill_point_calculation: "EDU*4"
        },
        {
            background_id: 2,
            name: "Author",
            credit_rating_min: 9,
            credit_rating_max: 30,
            skill_point_calculation: "EDU*4"
        },
        {
            background_id: 3,
            name: "Dilettante",
            credit_rating_min: 50,
            credit_rating_max: 99,
            skill_point_calculation: "EDU*2 + APP*2"
        },
        {
            background_id: 4,
            name: "Doctor of Medicine",
            credit_rating_min: 30,
            credit_rating_max: 80,
            skill_point_calculation: "EDU*4"
        },
        {
            background_id: 5,
            name: "Journalist",
            credit_rating_min: 9,
            credit_rating_max: 30,
            skill_point_calculation: "EDU*4"
        },
        {
            background_id: 6,
            name: "Police Detective",
            credit_rating_min: 20,
            credit_rating_max: 50,
            skill_point_calculation: "EDU*2 + (STR*2 || DEX*2)"
        },
        {
            background_id: 7,
            name: "Private Investgator",
            credit_rating_min: 9,
            credit_rating_max: 30,
            skill_point_calculation: "EDU*2 + (STR*2 || DEX*2)"
        },
        {
            background_id: 8,
            name: "Professor",
            credit_rating_min: 20,
            credit_rating_max: 70,
            skill_point_calculation: "EDU*4"
        },
    ]);
};