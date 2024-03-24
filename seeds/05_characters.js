/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('characters').del();
    await knex('characters').insert([
        {
            character_id: 1,
            user_id: 1,
            background_id: 1,
            name: "John Doe",
            gender: "male",
            age: 30,
            birthplace: "Boston",
            residence: "Boston",
            special_people: "grandfather",
            favoured_possession: "pocket watch",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 2,
            user_id: 1,
            background_id: 2,
            name: "Jamie Welsh",
            gender: "non-binary",
            age: 22,
            birthplace: "Chicago",
            residence: "Boston",
            special_people: "sister",
            favoured_possession: "locket",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 3,
            user_id: 1,
            background_id: 3,
            name: "Jane Rochester",
            gender: "female",
            age: 25,
            birthplace: "Chicago",
            residence: "Arkham",
            special_people: "father",
            favoured_possession: "pistol",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 4,
            user_id: 1,
            background_id: 4,
            name: "Jacob Richards",
            gender: "male",
            age: 50,
            birthplace: "London",
            residence: "Arkham",
            special_people: "wife",
            favoured_possession: "wedding ring",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 5,
            user_id: 2,
            background_id: 5,
            name: "Amy Smith",
            gender: "female",
            age: 32,
            birthplace: "Toronto",
            residence: "Arkham",
            special_people: "mother",
            favoured_possession: "camera",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 6,
            user_id: 2,
            background_id: 6,
            name: "Alex Jones",
            gender: "non-binary",
            age: 33,
            birthplace: "Boston",
            residence: "London",
            special_people: "grandmother",
            favoured_possession: "brooch",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 7,
            user_id: 2,
            background_id: 7,
            name: "Aoife Mullen",
            gender: "female",
            age: 40,
            birthplace: "Dublin",
            residence: "Arkham",
            special_people: "brother",
            favoured_possession: "dog tags",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        },
        {
            character_id: 8,
            user_id: 2,
            background_id: 8,
            name: "Andrew Doyle",
            gender: "male",
            age: 45,
            birthplace: "Toronto",
            residence: "Boston",
            special_people: "teacher",
            favoured_possession: "book of poetry",
            mania: "",
            traits: "",
            injuries: "",
            feats: "",
            spells: "",
            notes: ""
        }
    ]);
};