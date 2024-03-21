require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require('./routes/auth-routes.js');
const backgroundsRoutes = require('./routes/backgrounds-routes');
const charactersRoutes = require('./routes/characters-routes');
const skillsRoutes = require('./routes/skills-routes');

const PORT = process.env.PORT || process.argv[2] || 8081;
const { CORS_ORIGIN } = process.env;

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Add a console tracker of what requests are being made for development testing purposes
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} from: ${req.url}`);
  
    next();
})


// default home route
app.get('/', (req, res) => {
    res.send('Welcome to the Cthulhu Character Vault!');
});

//user authentication route 
app.use('/users', authRoutes);

//backgrounds request route 
app.use('/backgrounds', backgroundsRoutes);

//character sheet requests route 
app.use('/characters', charactersRoutes);

//skills request route 
app.use('/skills', skillsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });