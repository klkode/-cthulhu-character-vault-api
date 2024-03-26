require("dotenv").config();
const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

function authorize(req, res, next) {
    // Get the authorization token from the header
    const { authorization } = req.headers;
    const token = authorization.slice("Bearer ".length);

    // Verify the token
    try {
        const payload = jwt.verify(token, JWT_KEY);
        req.decode = payload;
        next();

    } catch (error) {
        // console.log(error);
        res.status(401).json({ error: "User not validated." })

    }

}

module.exports = { authorize };