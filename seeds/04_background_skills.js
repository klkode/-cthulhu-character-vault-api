/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('background_skills').del();
    await knex('background_skills').insert([
        {
            background_id: 1,
            option: 1,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "4"
        },
        {
            background_id: 1,
            option: 2,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Arts/Crafts"
        },
        {
            background_id: 1,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "54"
        },
        {
            background_id: 1,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "80"
        },
        {
            background_id: 1,
            option: 5,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Language (Other)"
        },
        {
            background_id: 1,
            option: 6,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Interpersonal"
        },
        {
            background_id: 1,
            option: 7,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "117"
        },
        {
            background_id: 1,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 2,
            option: 1,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "15"
        },
        {
            background_id: 2,
            option: 2,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "54"
        },
        {
            background_id: 2,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "80"
        },
        {
            background_id: 2,
            option: 4,
            is_choice: true,
            is_category: false,
            is_all: false,
            choices: "91,93"
        },
        {
            background_id: 2,
            option: 5,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Language (Other)"
        },
        {
            background_id: 2,
            option: 6,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "58"
        },
        {
            background_id: 2,
            option: 7,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 2,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 3,
            option: 1,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Arts/Crafts"
        },
        {
            background_id: 3,
            option: 2,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Firearms (Specialization)"
        },
        {
            background_id: 3,
            option: 3,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Language (Other)"
        },
        {
            background_id: 3,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "102"
        },
        {
            background_id: 3,
            option: 5,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Interpersonal"
        },
        {
            background_id: 3,
            option: 6,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 3,
            option: 7,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 3,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 4,
            option: 1,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "53"
        },
        {
            background_id: 4,
            option: 2,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "70"
        },
        {
            background_id: 4,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "90"
        },
        {
            background_id: 4,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 4,
            option: 5,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "58"
        },
        {
            background_id: 4,
            option: 6,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 4,
            option: 7,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 4,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 5,
            option: 1,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "19"
        },
        {
            background_id: 5,
            option: 2,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "54"
        },
        {
            background_id: 5,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "80"
        },
        {
            background_id: 5,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "58"
        },
        {
            background_id: 5,
            option: 5,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 5,
            option: 6,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Interpersonal"
        },
        {
            background_id: 5,
            option: 7,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 5,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 6,
            option: 1,
            is_choice: true,
            is_category: false,
            is_all: false,
            choices: "6,31"
        },
        {
            background_id: 6,
            option: 2,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Firearms (Specialization)"
        },
        {
            background_id: 6,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "79"
        },
        {
            background_id: 6,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "81"
        },
        {
            background_id: 6,
            option: 5,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 6,
            option: 6,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "117"
        },
        {
            background_id: 6,
            option: 7,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Interpersonal"
        },
        {
            background_id: 6,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 7,
            option: 1,
            is_choice: true,
            is_category: false,
            is_all: false,
            choices: "19"
        },
        {
            background_id: 7,
            option: 2,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "31"
        },
        {
            background_id: 7,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "79"
        },
        {
            background_id: 7,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "80"
        },
        {
            background_id: 7,
            option: 5,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 7,
            option: 6,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "117"
        },
        {
            background_id: 7,
            option: 7,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Interpersonal"
        },
        {
            background_id: 7,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 8,
            option: 1,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "80"
        },
        {
            background_id: 8,
            option: 2,
            is_choice: true,
            is_category: true,
            is_all: false,
            choices: "Language (Other)"
        },
        {
            background_id: 8,
            option: 3,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "58"
        },
        {
            background_id: 8,
            option: 4,
            is_choice: false,
            is_category: false,
            is_all: false,
            choices: "100"
        },
        {
            background_id: 8,
            option: 5,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 8,
            option: 6,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 8,
            option: 7,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
        {
            background_id: 8,
            option: 8,
            is_choice: true,
            is_category: false,
            is_all: true,
            choices: "Any"
        },
    ]);
};