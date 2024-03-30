const knex = require("knex")(require("../../knexfile.js"));

const getAllUsersCharacters = async (req, res) => {
    try {
        // TODO check if user_id exists in database?
        const userId = req.decode.user_id;

        //Get a list of the characters belonging to this user. Only return the information on the character's name, id, and their background's name 
        const data = await knex('characters')
        .join("backgrounds", "backgrounds.background_id", "characters.background_id")
        .select(
            "characters.character_id",
            "characters.name AS character_name",
            "backgrounds.name AS background_name"
        ).where({user_id: userId});

        // Return the results of the query
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving users characters: ${error}`);
    }
}

const getCharacterDetails = async (req, res) => {
    try{
        // TODO check if user_id exists in database?
        const userId = req.decode.user_id;
        // Check to see if the ID of the inventory is valid
        const characterId = req.params.id;
        if (!characterId || isNaN(characterId)) {
            // Return the response of an invalid ID
             return res.status(400).send(`Invalid character id: ${characterId}`);
        }

        //Get a list of the characters belonging to this user. Only return the information on the character's name, id, and their background's name 
        const characterData = await knex('characters')
        .join("backgrounds", "backgrounds.background_id", "characters.background_id")
        .select(
            "characters.character_id",
            "characters.name AS character_name",
            "characters.gender",
            "characters.age",
            "characters.birthplace",
            "characters.residence",
            "characters.background_id",
            "backgrounds.name AS background_name",
            "characters.special_people",
            "characters.favoured_possession",
            "characters.mania",
            "characters.traits",
            "characters.injuries",
            "characters.feats",
            "characters.spells",
            "characters.notes"            
        )
        .where({user_id: userId, 'characters.character_id': characterId})
        .first();

        if(!characterData){
            // Return the results of the query
            res.status(404).json({error: `No character with id ${characterId} belongs to user with id ${userId}`});
        }else{
            // Get the character's stats as an object
            const statsData = await knex('stats')
            .select("*")          
            .where({character_id: characterId})
            .first();

            // Remove the unnecessary keys from the object
            delete statsData.character_id;
            delete statsData.created_at;
            delete statsData.updated_at;

            // Get an array of all the character's skill points
            const skillsData = await knex('skill_points')
            .select(
                "skill_points.skill_id",
                "skill_points.points",
            )          
            .where({character_id: characterId});

             // Get an array of all the character's equipment
             const equipmentData = await knex('equipment')
             .select(
                 "equipment.equipment_id",
                 "equipment.name",
             )          
             .where({character_id: characterId});
            
            // Add them onto the characterData object
            const characterSheet = {...characterData, stats: statsData, skills: skillsData,  equipment: equipmentData};
            
            // Return the results of the query
            res.status(200).json(characterSheet);
        }


    }catch(error){
        res.status(500).send(`Error retrieving character's details: ${error}`);
    }
}

const addCharacter = async (req, res) => {
    try{
        // Check if user_id+username exists in database
        const userId = req.decode.user_id;
        const userName = req.decode.username;
        const referencedUser = await knex("users").where({
            user_id: userId,
            username: userName 
        });

        if (referencedUser.length === 0) {
            return res.status(400).json({
              error: `Inventories request cannot be completed as the user ${userName} does not exist.`,
            });

        } else {
            // Add the validated body into the characters database
            // Create a transaction as there will be several database insertions
            await knex.transaction(async(trx) => {
                // Iscolate the three foreign key dependent data sets to add
                const equipmentList = req.body.equipment;
                const skillsList = req.body.skills;
                const characterStats = req.body.stats;

                // Create character object, adding user_id and removing unecessary values
                const characterInputs = req.body;
                characterInputs.user_id = userId;
                delete characterInputs.equipment;
                delete characterInputs.skills;
                delete characterInputs.stats;
                
                // Add the new character to the database
                const newCharacterIds = await knex("characters").insert(characterInputs).transacting(trx);
                const newCharacterId = newCharacterIds[0];

                //Add this id to all the foriegn key dependent tables data sets
                characterStats.character_id = newCharacterId;
                skillsList.forEach((skill) => skill.character_id = newCharacterId);
                equipmentList.forEach((equipment) => equipment.character_id = newCharacterId);
                
                // Insert the relational table data
                const newCharacterStats = await knex("stats").insert(characterStats).transacting(trx);
                const newCharacterSkills = await knex("skill_points").insert(skillsList).transacting(trx);
                let newCharacterEquipment;
                if(equipmentList.length !== 0){
                    newCharacterEquipment = await knex("equipment").insert(equipmentList).transacting(trx);
                }

                // Compress all the new inserts into one object to return to the user
                const newCharacterData = await knex('characters')
                .join("backgrounds", "backgrounds.background_id", "characters.background_id")
                .select(
                    "characters.character_id",
                    "characters.name AS character_name",
                    "characters.gender",
                    "characters.age",
                    "characters.birthplace",
                    "characters.residence",
                    "characters.background_id",
                    "backgrounds.name AS background_name",
                    "characters.special_people",
                    "characters.favoured_possession",
                    "characters.mania",
                    "characters.traits",
                    "characters.injuries",
                    "characters.feats",
                    "characters.spells",
                    "characters.notes"            
                )
                .where({'characters.character_id': newCharacterId})
                .first()
                .transacting(trx);

                // Get the character's stats as an object
                const statsData = await knex('stats')
                .select("*")          
                .where({character_id: newCharacterId})
                .first()
                .transacting(trx);

                // Remove the unnecessary keys from the object
                delete statsData.character_id;
                delete statsData.created_at;
                delete statsData.updated_at;

                // Get an array of all the character's skill points
                const skillsData = await knex('skill_points')
                .select(
                    "skill_points.skill_id",
                    "skill_points.points",
                )          
                .where({character_id: newCharacterId})
                .transacting(trx);

                // Get an array of all the character's equipment
                const equipmentData = await knex('equipment')
                .select(
                    "equipment.equipment_id",
                    "equipment.name",
                )          
                .where({character_id: newCharacterId})
                .transacting(trx);

                // Add them onto the characterData object
                const createdCharacter = {...newCharacterData, stats: statsData, skills: skillsData,  equipment: equipmentData};

                // Return the created character
                res.status(201).json(createdCharacter);

            });
        }

    }catch(error){
        res.status(500).send(`Error adding new character: ${error}`);
    }
}

module.exports = { getAllUsersCharacters, getCharacterDetails, addCharacter };