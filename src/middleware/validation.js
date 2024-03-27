
function validateNewCharacter(req, res, next) {
    // console.log(req.body);
    
    // TODO Check that the input is good
    if(true) {
        next();

    } else{
        res.status(400).json({ error: "Required fields are missing." })
    }

}

module.exports = { validateNewCharacter };