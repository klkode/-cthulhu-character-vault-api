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
        res.status(500).send(`Error retrieving users characters: ${error}`)
    }
}

module.exports = { getAllUsersCharacters };