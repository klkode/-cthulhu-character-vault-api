const knex = require("knex")(require("../../knexfile.js"));

const getAllUsersCharacters = async (req, res) => {
    try {
        // console.log("controller req: ", req.decode);
        const data = await knex('characters')
        .join("backgrounds", "backgrounds.background_id", "characters.background_id")
        .select(
            "characters.character_id",
            "characters.name AS character_name",
            "characters.background_id",
            "backgrounds.name AS background_name"
        ).where({user_id: 1}); //TODO make dynamic
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving users characters: ${error}`)
    }
}

module.exports = { getAllUsersCharacters };