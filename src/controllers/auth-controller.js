require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../../knexfile.js"));

const { JWT_KEY } = process.env;
const SALT_ROUNDS = 10;

/**
 * userSignUp is a function that fufills a POST request. A new user will be created, with the provided username and password, and then return a token to use as for server request validation for the new user's session.
 * 
 * @param {Object}      req 
 * @param {Object}      res 
 * 
 */
const userSignUp = async (req, res) => {
    try {
        // Get the username and password from the request
        const { username, password } = req.body;

        // Check that the username and password are not empty
        // TODO proper middleware validation
        if(!username || !password) {
            res.status(400).json({ error: "Username and password cannot be empty." });
        }

        // Hash the password
        const hash = await bcrypt.hash(password, SALT_ROUNDS);

        // Add new user to the users database
        const hashedUser = {
            username: username,
            password: hash
        };  
        const result = await knex("users").insert(hashedUser);
        // Grab the id of the user just created
        const newUserId = result[0];
        // Grab the user object that was just created
        const createdUser = await knex("users").where({ user_id: newUserId, });

        // Generate token for the new user to begin their session
        let token = jwt.sign({ user_id: createdUser.user_id, username: createdUser.username }, JWT_KEY);
        res.status(201).json({ token: token });

    } catch (error) {
        res.status(500).json({ error: `Could not register new user. ${error}` });
    }
};

/**
 * userLogin is a function that fufills a POST request. If the username and password match one in the users table, return a token to use as for server request validation for the user's session.
 * 
 * @param {Object}      req 
 * @param {Object}      res
 * 
 */
const userLogin = async (req, res) => {
    // Get the username and password from the request
    const { username, password } = req.body;

    // Check that the username and password are not empty
    // TODO proper middleware validation
    if(!username || !password) {
        res.status(400).json({ error: "Username and password cannot be empty." });
    }

    // Check that the user exists in the database
    const user = await knex("users").where({ username }).first();
    if (!user) {
      // Return the response of failing to find the user data
      return res.status(404).json({ error: `User ${username} does not exist.` });
    }

    // Check if password is correct
    const passwordMatches = await bcrypt.compare(password, user.password);

    if(!passwordMatches){
        // If there's an error, send that back to the client with a 401 status code.
        return res.status(401).json({ error: "Login failed. Wrong username and password" });
    }else{
        // Create a JWT token for the user(with user_id and username) and send the token back to the client.
        let token = jwt.sign({ user_id: user.user_id, username: user.username }, JWT_KEY);
        res.status(200).json({ token: token });
    }
};

module.exports = { userSignUp, userLogin };