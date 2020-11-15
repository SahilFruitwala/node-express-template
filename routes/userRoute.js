const router = require("express").Router();
const bcrypt = require('bcryptjs')

// Model
const User = require('../model/UserModel');

// Login
router.get("/login", (req, res) => {
  res.send("Login Done!!");
});

// Register
router.post("/register", (req, res) => {
  const {name, email, password, password2} = req.body;
  let error = []

  // check empty data 
  if (!name || !email || !password || !password2) {
    error.push({ msg:"Please submit all the data!"})
  }
  // match password
  if (password !== password2) {
    error.push({ msg: "Password does not match!" });
  }

  // validate password
  if(password.length < 6) {
    error.push({ msg: "Enter Valid password!" });
  }

  if (error.length > 0) {
    res.json(error);
  }
  else{
    User.findOne({email:email})
    .then(user => {
      if(user) {
        res.json({ msg: "User Email Already Exists!" });
      }
      else {
        const newUser = new User({
          name,
          email,
          password
        })
        console.log(newUser);
        res.send('hi')
      }
    })
  }

});


module.exports = router;
