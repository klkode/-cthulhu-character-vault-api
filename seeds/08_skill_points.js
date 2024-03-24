/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('skill_points').del();
    await knex('skill_points').insert([
        {
            character_id: 1,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 1,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 2,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 3,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 4,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 5,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 6,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 7,
            skill_id: 130,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 1,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 2,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 3,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 4,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 5,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 6,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 7,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 8,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 9,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 10,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 11,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 12,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 13,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 14,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 15,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 16,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 17,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 18,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 19,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 20,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 21,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 22,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 23,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 24,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 25,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 26,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 27,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 28,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 29,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 30,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 31,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 32,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 33,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 34,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 35,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 36,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 37,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 38,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 39,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 40,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 41,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 42,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 43,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 44,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 45,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 46,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 47,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 48,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 49,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 50,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 51,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 52,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 53,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 54,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 55,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 56,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 57,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 58,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 59,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 60,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 61,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 62,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 63,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 64,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 65,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 66,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 67,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 68,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 69,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 70,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 71,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 72,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 73,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 74,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 75,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 76,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 77,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 78,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 79,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 80,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 81,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 82,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 83,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 84,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 85,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 86,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 87,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 88,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 89,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 90,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 91,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 92,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 93,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 94,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 95,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 96,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 97,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 98,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 99,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 100,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 101,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 102,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 103,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 104,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 105,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 106,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 107,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 108,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 109,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 110,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 111,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 112,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 113,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 114,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 115,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 116,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 117,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 118,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 119,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 120,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 121,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 122,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 123,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 124,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 125,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 126,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 127,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 128,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 129,
            points: 1
        },
        {
            character_id: 8,
            skill_id: 130,
            points: 1
        },
    ]);
};