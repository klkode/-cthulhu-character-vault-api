const knex = require("knex")(require("../../knexfile.js"));

/**
 * getAllSkills is a function that will fulfill a GET request by getting all the skills in the skills table and returning an array of them.
 * 
 * @param {Object}      req 
 * @param {Object}      res
 */
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
        res.status(500).send(`Error retrieving skills list: ${error}`)
    }
}

module.exports = { getAllSkills };