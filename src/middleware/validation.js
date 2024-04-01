// The current number of skills in the skills table
const NUM_SKILLS = 130;

/**
 * validateNewCharacter is a middleware function that will check the body data in a POST /characters request to ensure that it can be properly added to the characters table and other relational tables.
 * 
 * @param {Object}      req 
 * @param {Object}      res 
 * @param {Object}      next 
 * 
 */
function validateNewCharacter(req, res, next) {
    const characterData = req.body;

    // Check that not-nullable fields are present
    if(!(allRequiredCharacterDetailsPresent(characterData) 
    && (!!characterData.stats && allCharacterStatsPresent(characterData.stats))
    && (!!characterData.skills && allCharacterSkillsPresent(characterData.skills))
    )) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    // Check that all strings are less than their character maximums
    // NOTE: all numbers used as maximums were referenced from the characters table in the database
    if(!(lengthUnderMaximum(characterData.name, 255) && lengthUnderMaximum(characterData.gender, 63)
    && lengthUnderMaximum(characterData.birthplace, 127)
    && lengthUnderMaximum(characterData.residence, 127)
    && lengthUnderMaximum(characterData.special_people, 255)
    && lengthUnderMaximum(characterData.favoured_possession, 255)
    )){
        return res.status(400).json({ error: "Field value character length is too large for the column it would be stored in." });
    }

    // Check that all numbers are numbers
    if(!(areAllSkillsNumbers(characterData.skills)
    && areAllStatsNumbers(characterData.stats) 
    && !isNaN(characterData.age) 
    && !isNaN(characterData.background_id)
    )){
        return res.status(400).json({ error: "Field value is not the expected number datatype." });
    }

    // Check that all numbers are within their expected ranges and are integers
    // NOTE for human characters (which is what this sprint allows for) all stats and skills should be between 0-100, with the exception of build)
    if(!(areAllSkillsUnsigned(characterData.skills) 
    && areAllStatsUnsigned(characterData.stats) 
    && intBetween0To100(characterData.age) 
    && (characterData.background_id > 0 && Number.isInteger(characterData.background_id))
    )){
            return res.status(400).json({ error: "Field value is not an integer within the expected numerical range." });
    }

    // TODO check that background_id exists in backgrounds table
    // TODO verify equipment (for a later sprint)
    // TODO protect against injections (for a later sprint)

    // Made it through testing so proceed to controller
    next();

}

/**
 * validateEditCharacter is a middleware function that will check the body data in a PUT /characters/:id request to ensure that it can be properly used to update a character in the characters table and other relational tables.
 * 
 * @param {Object}      req 
 * @param {Object}      res 
 * @param {Object}      next 
 * 
 */
function validateEditCharacter(req, res, next) {
    const characterData = req.body;

    // Check that not-nullable fields are present
    if(!(allRequiredExistingDetailsPresent(characterData) 
    && (!!characterData.stats && allCharacterStatsPresent(characterData.stats))
    && (!!characterData.skills && allCharacterSkillsPresent(characterData.skills))
    )) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    // Check that the id is a valid id
    const characterId = req.params.id;
    if (!characterId || isNaN(characterId)) {
        // Return the response of an invalid ID
        return res.status(400).send(`Invalid character id: ${characterId}`);
    }

    // Check that the id of the path request matches that of the object to edit
    if(Number(characterId) !== req.body.character_id){
        return res.status(400).send(`Character ids of the request and object do not match.`);
    }

    // Check that all strings are less than their character maximums
    // NOTE: all numbers used as maximums were referenced from the characters table in the database
    if(!(lengthUnderMaximum(characterData.name, 255) && lengthUnderMaximum(characterData.gender, 63)
    && lengthUnderMaximum(characterData.birthplace, 127)
    && lengthUnderMaximum(characterData.residence, 127)
    && lengthUnderMaximum(characterData.special_people, 255)
    && lengthUnderMaximum(characterData.favoured_possession, 255)
    )){
        return res.status(400).json({ error: "Field value character length is too large for the column it would be stored in." });
    }

    // Check that all numbers are numbers
    if(!(areAllSkillsNumbers(characterData.skills)
    && areAllStatsNumbers(characterData.stats) 
    && !isNaN(characterData.age)
    && !isNaN(characterData.character_id)
    && !isNaN(characterData.background_id)
    )){
        return res.status(400).json({ error: "Field value is not the expected number datatype." });
    }

    // Check that all numbers are within their expected ranges and are integers
    // NOTE for human characters (which is what this sprint allows for) all stats and skills should be between 0-100, with the exception of build)
    if(!(areAllSkillsUnsigned(characterData.skills) 
    && areAllStatsUnsigned(characterData.stats) 
    && intBetween0To100(characterData.age) 
    && (characterData.background_id > 0 && Number.isInteger(characterData.background_id))
    && (characterData.character_id > 0 && Number.isInteger(characterData.character_id))
    )){
            return res.status(400).json({ error: "Field value is not an integer within the expected numerical range." });
    }

    // TODO check that background_id exists in backgrounds table
    // TODO verify equipment (for a later sprint)
    // TODO protect against injections (for a later sprint)

    // Made it through testing so proceed to controller
    next();

}

/**
 * allRequiredCharacterDetailsPresent is a helper function that checks if all the required fields of a character's data in the characters table are present when creating a character
 * 
 * @param {Object}      characterData 
 * 
 * @returns {boolean}
 */
function allRequiredCharacterDetailsPresent(characterData){
    if(!characterData.name || !characterData.gender || !(characterData.age) || !(characterData.background_id)){
        return false;
    }else{
        return true;
    }
}

/**
 * allRequiredExistingDetailsPresent is a helper function that checks if all the required fields of a character's data in the characters table are present when updating a character
 * 
 * @param {Object}      characterData 
 * 
 * @returns {boolean}
 */
function allRequiredExistingDetailsPresent(characterData){
    if(!characterData.name || !characterData.gender || !(characterData.age) 
    || !(characterData.background_id) || !(characterData.character_id)){
        return false;
    }else{
        return true;
    }
}

/**
 * allCharacterStatsPresent is a helper function that checks if all the required fields of a character's stat data in the stats table are present
 * 
 * @param {Object}      characterStats 
 * 
 * @returns {boolean}
 */
function allCharacterStatsPresent(characterStats){
    if(!(characterStats.strength+"") || !(characterStats.dexterity+"") || !(characterStats.constitution+"")
    || !(characterStats.size+"") || !(characterStats.appearance+"") || !(characterStats.education+"")
    || !(characterStats.intelligence+"") || !(characterStats.power+"") || !(characterStats.luck+"")
    || !(characterStats.sanity+"") || !(characterStats.health+"") || !(characterStats.magic_points+"")
    || !(characterStats.build+"") || !(characterStats.movement+"")){
        return false;
    }else{
        return true;
    }
}

/**
 * allCharacterSkillsPresent is a helper function that checks if all the skills in the skills table are represented in the character's skills array
 * 
 * @param {Object[]}      characterSkills 
 * 
 * @returns {boolean}
 */
function allCharacterSkillsPresent(characterSkills){
    if(characterSkills.length !== NUM_SKILLS){
        return false;
    }

    // At the moment, all skills are numbered 1 - 130(NUM_SKILLS). So if we order the character skills by skill_id and ensure that every number from 1 - 130(NUM_SKILLS) is present, then all skills are there.
    let ids = [];
    for(let i = 0; i < characterSkills.length - 1; i++){
        if(!!(characterSkills[i].skill_id+"") && !!(characterSkills[i].points+"")){
            ids.push(Number(characterSkills[i].skill_id));
        }else{
            return false;
        }
    }
    ids.sort((a,b) => {return a - b});
    for(let i = 0; i < ids.length; i++){
        if(ids[i] !== (i + 1)){
            return false;
        }
    }

    // If made it through this above testing return true
    return true;
}

/**
 * areAllStatsNumbers is a helper function that checks if all the fields of a character's stat data are numbers
 * 
 * @param {Object}      characterStats 
 * 
 * @returns {boolean}
 */
function areAllStatsNumbers(characterStats){
    if(isNaN(characterStats.strength) || isNaN(characterStats.dexterity) || isNaN(characterStats.constitution)
    || isNaN(characterStats.size) || isNaN(characterStats.appearance) || isNaN(characterStats.education)
    || isNaN(characterStats.intelligence) || isNaN(characterStats.power) || isNaN(characterStats.luck)
    || isNaN(characterStats.sanity) || isNaN(characterStats.health) || isNaN(characterStats.magic_points)
    || isNaN(characterStats.build) || isNaN(characterStats.movement)){
        return false;
    }else{
        return true;
    }
}

/**
 * areAllSkillsNumbers is a helper function that checks if all the fields of a character's skill data are numbers
 * 
 * @param {Object[]}      characterSkills 
 * 
 * @returns {boolean}
 */
function areAllSkillsNumbers(characterSkills){
    for(let i = 0; i < characterSkills.length; i++){
        if(isNaN(characterSkills[i].skill_id) || isNaN(characterSkills[i].points)){
            return false;
        }
    }
    return true;
}

/**
 * areAllStatsUnsigned is a helper function that checks if all the fields of a character's stat data are unsigned integers
 * 
 * @param {Object}      characterStats 
 * 
 * @returns {boolean}
 */
function areAllStatsUnsigned(characterStats){
    if(!intBetween0To100(characterStats.strength) || !intBetween0To100(characterStats.dexterity) 
    || !intBetween0To100(characterStats.constitution) || !intBetween0To100(characterStats.size) 
    || !intBetween0To100(characterStats.appearance) || !intBetween0To100(characterStats.education)
    || !intBetween0To100(characterStats.intelligence) || !intBetween0To100(characterStats.power) 
    || !intBetween0To100(characterStats.luck) || !intBetween0To100(characterStats.sanity) 
    || !intBetween0To100(characterStats.health) || !intBetween0To100(characterStats.magic_points)
    || !intBetween0To100(characterStats.movement) ||!(Number.isInteger(characterStats.build))){
        return false;
    }else{
        return true;
    }
}

/**
 * areAllSkillsUnsigned is a helper function that checks if all the fields of a character's skill data are unsigned integers
 * 
 * @param {Object[]}      characterSkills 
 * 
 * @returns {boolean}
 */
function areAllSkillsUnsigned(characterSkills){
    for(let i = 0; i < characterSkills.length; i++){
        if(!(characterSkills[i].skill_id >=1 && Number.isInteger(characterSkills[i].skill_id) ) 
        || !intBetween0To100(characterSkills[i].points)){
            return false;
        }
    }
    return true;
}

/**
 * intBetween0To100 is a helper function that checks if a number is an integer between 0 and 100 (inclusive)
 * 
 * @param {number}      num 
 * 
 * @returns {boolean}
 */
function intBetween0To100(num){
    return ((num >= 0) && (num <= 100) && Number.isInteger(num));
}

/**
 * lengthUnderMaximum is a helper function that checks if a string's length is less than a given maximum number.
 * @param {string}      str 
 * @param {number}      max 
 * 
 * @returns {boolean}
 */
function lengthUnderMaximum(str, max){
    return (str.length <= max); 
}

module.exports = { validateNewCharacter, validateEditCharacter };