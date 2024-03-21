require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });