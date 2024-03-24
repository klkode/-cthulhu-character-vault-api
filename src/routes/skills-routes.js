const router = require("express").Router();
const skillsController = require("../controllers/skills-controller.js");

//Route for /skills
// GETs the skills list from the skills table
router.route("/").get(skillsController.getAllSkills);

module.exports = router;
