const knex = require("knex")(require("../../knexfile.js"));

const getAllBackgrounds = async (req, res) => {
    try {
        const data = await knex('backgrounds').select(
            "background_id",
            "name",
            "credit_rating_min",
            "credit_rating_max",
            "skill_point_calculation"
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving backgrounds list: ${error}`)
    }
}

module.exports = { getAllBackgrounds };