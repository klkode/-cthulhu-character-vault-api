const router = require("express").Router();
const { authorize } = require("../middleware/authorization.js");
const charactersController = require("../controllers/characters-controller.js");

//Route for /characters
// GETs the characters list from the characters table
router
    .route("/")
    .get(authorize, charactersController.getAllUsersCharacters);

//Route for /characters/:id
// GETs the details for a specified character that matched the id from characters table
router
    .route("/:id")
    .get(authorize, charactersController.getCharacterDetails);

module.exports = router;