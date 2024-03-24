const knex = require("knex")(require("../../knexfile.js"));

const getAllSkills = async (req, res) => {
    try {
        const data = await knex('skills').select(
            "skill_id",
            "name",
            "base_value",
            "category"
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(`Error retrieving skills list: ${error}`)
    }
}

module.exports = { getAllSkills };