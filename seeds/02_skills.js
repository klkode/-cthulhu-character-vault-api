/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('skills').del();
  await knex('skills').insert([
    {
      skill_id: 1,
      name: "Accounting",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 2,
      name: "Animal Handling",
      base_value: 5,
      category: "Uncommon"
    },
    {
      skill_id: 3,
      name: "Anthropology",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 4,
      name: "Appraise",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 5,
      name: "Archaeology",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 6,
      name: "Arts and Crafts (Acting)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 7,
      name: "Arts and Crafts (Barber)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 8,
      name: "Arts and Crafts (Calligraphy)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 9,
      name: "Arts and Crafts (Carpenter)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 10,
      name: "Arts and Crafts (Cobbler)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 11,
      name: "Arts and Crafts (Cook)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 12,
      name: "Arts and Crafts (Dancer)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 13,
      name: "Arts and Crafts (Fine Art)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 14,
      name: "Arts and Crafts (Forgery)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 15,
      name: "Arts and Crafts (Literature)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 16,
      name: "Arts and Crafts (Morris Dancer)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 17,
      name: "Arts and Crafts (Opera Singer)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 18,
      name: "Arts and Crafts (Painter and Decorator)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 19,
      name: "Arts and Crafts (Photography)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 20,
      name: "Arts and Crafts (Potter)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 21,
      name: "Arts and Crafts (Sculptor)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 22,
      name: "Arts and Crafts (Vacuum-Tube Blower)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 23,
      name: "Arts and Crafts (Woodworker)",
      base_value: 5,
      category: "Arts/Crafts"
    },
    {
      skill_id: 24,
      name: "Artillery",
      base_value: 1,
      category: "Uncommon"
    },
    {
      skill_id: 25,
      name: "Charm",
      base_value: 15,
      category: "Interpersonal"
    },
    {
      skill_id: 26,
      name: "Climb",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 27,
      name: "Computer Use",
      base_value: 5,
      category: "Modern"
    },
    {
      skill_id: 28,
      name: "Credit Rating",
      base_value: 0,
      category: "Credit Rating"
    },
    {
      skill_id: 29,
      name: "Cthulhu Mythos",
      base_value: 0,
      category: "Cthulhu Mythos"
    },
    {
      skill_id: 30,
      name: "Demolitions",
      base_value: 1,
      category: "Uncommon"
    },
    {
      skill_id: 31,
      name: "Disguise",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 32,
      name: "Diving",
      base_value: 1,
      category: "Uncommon"
    },
    {
      skill_id: 33,
      name: "Dodge",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 34,
      name: "Drive Auto",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 35,
      name: "Electrical Repair",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 36,
      name: "Electronics",
      base_value: 1,
      category: "Modern"
    },
    {
      skill_id: 37,
      name: "Fast Talk",
      base_value: 5,
      category: "Interpersonal"
    },
    {
      skill_id: 38,
      name: "Fighting (Axe)",
      base_value: 15,
      category: "Fighting Specialization"
    },
    {
      skill_id: 39,
      name: "Brawl",
      base_value: 25,
      category: "Fighting Specialization"
    },
    {
      skill_id: 40,
      name: "Fighting (Chainsaw)",
      base_value: 10,
      category: "Fighting Specialization"
    },
    {
      skill_id: 41,
      name: "Fighting (Flail)",
      base_value: 10,
      category: "Fighting Specialization"
    },
    {
      skill_id: 42,
      name: "Fighting (Garrote)",
      base_value: 15,
      category: "Fighting Specialization"
    },
    {
      skill_id: 43,
      name: "Fighting (Spear)",
      base_value: 20,
      category: "Fighting Specialization"
    },
    {
      skill_id: 44,
      name: "Fighting (Sword)",
      base_value: 20,
      category: "Fighting Specialization"
    },
    {
      skill_id: 45,
      name: "Fighting (Whip)",
      base_value: 5,
      category: "Fighting Specialization"
    },
    {
      skill_id: 46,
      name: "Firearms (Bow)",
      base_value: 15,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 47,
      name: "Firearms (Handgun)",
      base_value: 20,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 48,
      name: "Firearms (Heavy Weapons)",
      base_value: 10,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 49,
      name: "Firearms (Flamethrower)",
      base_value: 10,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 50,
      name: "Firearms (Machine Gun)",
      base_value: 10,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 51,
      name: "Firearms (Rifle/Shotgun)",
      base_value: 25,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 52,
      name: "Firearms (Submachine Gun)",
      base_value: 15,
      category: "Firearms (Specialization)"
    },
    {
      skill_id: 53,
      name: "First Aid",
      base_value: 30,
      category: "None"
    },
    {
      skill_id: 54,
      name: "History",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 55,
      name: "Hypnosis",
      base_value: 1,
      category: "Uncommon"
    },
    {
      skill_id: 56,
      name: "Intimidate",
      base_value: 15,
      category: "Interpersonal"
    },
    {
      skill_id: 57,
      name: "Jump",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 58,
      name: "Language (Own)",
      base_value: 1,
      category: "Language"
    },
    {
      skill_id: 59,
      name: "Language (Ancient Greek)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 60,
      name: "Language (Bengali)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 61,
      name: "Language (Cantonese)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 62,
      name: "Language (Dutch)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 63,
      name: "Language (French)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 64,
      name: "Language (German)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 65,
      name: "Language (Greek)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 66,
      name: "Language (Hindi)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 67,
      name: "Language (Italian)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 68,
      name: "Language (Japanese)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 69,
      name: "Language (Korean)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 70,
      name: "Language (Latin)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 71,
      name: "Language (Mandarin)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 72,
      name: "Language (Polish)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 73,
      name: "Language (Portuguese)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 74,
      name: "Language (Russian)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 75,
      name: "Language (Spanish)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 76,
      name: "Language (Turkish)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 77,
      name: "Language (Urdu)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 78,
      name: "Language (Vietnamese)",
      base_value: 1,
      category: "Language (Other)"
    },
    {
      skill_id: 79,
      name: "Law",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 80,
      name: "Library Use",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 81,
      name: "Listen",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 82,
      name: "Locksmith",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 83,
      name: "Lore (Dream Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 84,
      name: "Lore (Necronomicon Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 85,
      name: "Lore (UFO Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 86,
      name: "Lore (Vampire Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 87,
      name: "Lore (Werewolf Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 88,
      name: "Lore (Yaddithian Lore)",
      base_value: 1,
      category: "Lore(Specialization) Uncommon"
    },
    {
      skill_id: 89,
      name: "Mechanical Repair",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 90,
      name: "Medicine",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 91,
      name: "Natural World",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 92,
      name: "Navigate",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 93,
      name: "Occult",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 94,
      name: "Operate Heavy Machinery",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 95,
      name: "Persuade",
      base_value: 10,
      category: "Interpersonal"
    },
    {
      skill_id: 96,
      name: "Pilot (Aircraft)",
      base_value: 1,
      category: "Pilot (Specialization)"
    },
    {
      skill_id: 97,
      name: "Pilot (Boat)",
      base_value: 1,
      category: "Pilot (Specialization)"
    },
    {
      skill_id: 98,
      name: "Pilot (Dirigible)",
      base_value: 1,
      category: "Pilot (Specialization)"
    },
    {
      skill_id: 99,
      name: "Psychoanalysis",
      base_value: 1,
      category: "None"
    },
    {
      skill_id: 100,
      name: "Psychology",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 101,
      name: "Read Lips",
      base_value: 1,
      category: "Uncommon"
    },
    {
      skill_id: 102,
      name: "Ride",
      base_value: 5,
      category: "None"
    },
    {
      skill_id: 103,
      name: "Science (Astronomy)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 104,
      name: "Science (Biology)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 105,
      name: "Science (Botany)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 106,
      name: "Science (Chemistry)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 107,
      name: "Science (Cryptography)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 108,
      name: "Science (Engineering)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 109,
      name: "Science (Forensics)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 110,
      name: "Science (Geology)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 111,
      name: "Science (Mathematics)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 112,
      name: "Science (Meteorology)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 113,
      name: "Science (Pharmacy)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 114,
      name: "Science (Physics)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 115,
      name: "Science (Zoology)",
      base_value: 1,
      category: "Science (Specialization)"
    },
    {
      skill_id: 116,
      name: "Sleight of Hand",
      base_value: 10,
      category: "None"
    },
    {
      skill_id: 117,
      name: "Spot Hidden",
      base_value: 25,
      category: "None"
    },
    {
      skill_id: 118,
      name: "Stealth",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 119,
      name: "Survival (Arctic)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 120,
      name: "Survival (Desert)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 121,
      name: "Survival (Forest)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 122,
      name: "Survival (Grassland)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 123,
      name: "Survival (Jungle)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 124,
      name: "Survival (Mountain)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 125,
      name: "Survival (Sea)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 126,
      name: "Survival (Swamp)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 127,
      name: "Survival (Urban)",
      base_value: 10,
      category: "Survival (Specialization)"
    },
    {
      skill_id: 128,
      name: "Swim",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 129,
      name: "Throw",
      base_value: 20,
      category: "None"
    },
    {
      skill_id: 130,
      name: "Track",
      base_value: 10,
      category: "None"
    }
  ]);
};