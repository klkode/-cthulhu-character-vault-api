/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('equipment').del();
    await knex('equipment').insert([
        {
            equipment_id: 1,
            character_id: 1,
            name: "pocket watch"
        },
        {
            equipment_id: 2,
            character_id: 2,
            name: "locket"
        },
        {
            equipment_id: 3,
            character_id: 3,
            name: "pistol"
        },
        {
            equipment_id: 4,
            character_id: 4,
            name: "wedding ring"
        },
        {
            equipment_id: 5,
            character_id: 5,
            name: "camera"
        },
        {
            equipment_id: 6,
            character_id: 6,
            name: "brooch"
        },
        {
            equipment_id: 7,
            character_id: 7,
            name: "dog tags"
        },
        {
            equipment_id: 8,
            character_id: 8,
            name: "book of poetry"
        },
    ]);
};