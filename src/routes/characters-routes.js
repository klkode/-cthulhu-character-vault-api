const router = require("express").Router();
const { authorize } = require("../middleware/authorization.js");
const charactersController = require("../controllers/characters-controller.js");

//Route for /characters
// GETs the characters list from the characters table
router
    .route("/")
    .get(authorize, charactersController.getAllUsersCharacters);

module.exports = router;