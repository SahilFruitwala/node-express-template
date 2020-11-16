const router = require("express").Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');
const {ensureAuthenticate} = require('../config/auth');

// Model
const User = require('../model/UserModel');


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
        // generate password hash
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            // save hash instead password
            newUser.password = hash;
            newUser.save()
            .then(data => {
              res.json({msg:"Regestration Success!"})
            })
            .catch(err => {
              res.json({msg:"Error Occured!", error: err})
            });
          });
        });
      }
    })
  }

});

// Login
router.post("/login", passport.authenticate('local'), (req, res) => {

  if(req.user) {
    res.json({msg:"Authenticated"})
    // console.log(req);
    }
    else{
      res.json({ msg: "Not Authenticated" });
    }
  } 
);

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.json({ msg: "Logout Success!" });
  } 
);

router.get("/data", ensureAuthenticate ,(err, res) => {
    res.json({msg:"Success!"})
}
);


module.exports = router;
