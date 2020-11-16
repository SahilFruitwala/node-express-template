const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
const mongoose = require('mongoose');
const passport = require('passport');

// Import Routes
const indexRoute = require("./routes/index");
const userRoute = require("./routes/userRoute");

// Config
dotenv.config();
const DB = process.env.DB_URI;
require('./config/passport')(passport);

// Basic setup
const app = express();
const PORT = process.env.PORT || 5050;

mongoose.connect( DB,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected with db...'))
  .catch(err => console.log('SOme Error Occurd...\n', err));

// Middlewares
app.use(cors()); // enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("combined"));  // logger set-up

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session())

// Routes
app.use("/", indexRoute);
app.use("/user", userRoute);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
