const knex = require("knex")(require("../../knexfile.js"));

const getAllBackgrounds = async (req, res) => {
    try {
        const backgroundData = await knex('backgrounds')
        .select(
            "background_id",
            "name",
            "credit_rating_min",
            "credit_rating_max",
            "skill_point_calculation"
        );
        
        // Append an arrary of the backgrounds occupational skill options to each background
        for(let index = 0; index < backgroundData.length; index++){
            const backgroundOptions = await knex('background_skills')
            .select(
                "option",
                "is_choice",
                "is_category",
                "is_all",
                "choices"
            )
            .where({background_id: backgroundData[index].background_id});
            backgroundData[index].options = backgroundOptions;
        }

        res.status(200).json(backgroundData);
    } catch (error) {
        res.status(400).send(`Error retrieving backgrounds list: ${error}`)
    }
}

module.exports = { getAllBackgrounds };