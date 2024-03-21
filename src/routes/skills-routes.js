const router = require("express").Router();

//Route for /skills
// GETs the skills list from the skills table
router.route("/").get((req, res) => {
    res.send('placeholder until skills retrieved');
});

module.exports = router;
