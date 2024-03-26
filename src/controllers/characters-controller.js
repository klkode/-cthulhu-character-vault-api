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
        .select(
            "characters.character_id",
            "characters.name AS character_name",
            "characters.gender",
            "characters.age",
            "characters.birthplace",
            "characters.residence",
            "characters.background_id",
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

module.exports = { getAllUsersCharacters, getCharacterDetails };