const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
const userRoute = require("./routes/userRoute");

// Basic setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5555;

// Middlewares
app.use(cors()); // enable cors
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // configure body parser
app.use(logger("combined"));  // logger set-up

// Endpoints
app.use("/user", userRoute);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
