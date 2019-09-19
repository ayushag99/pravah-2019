// HERE: Importing Files and Modules
const express = require("express");
const router = express.Router();
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");

const User = require("../../models/User");

// HERE: Enviroment constants
const public = path.join(__dirname, "../../public");

router.use(express.static(public));

//@type     GET
//@route    /admin
//@desc     for opening the admin panel
//@access   PUBLIC
// TODO: Make the routes private
router.get("/", (req, res) =>
  res.status(200).sendFile(path.join(public, "/admin.html"))
);
router.get("/login", (req, res) =>
  res.status(200).sendFile(path.join(public, "/login.html"))
);
router.post("/login", (req, res) => {
  User.findOne({ id: req.body.id })
    .then(user => {
      bcrypt.compare(req.body.password, user.password, (err, check) => {
          const date = new Date();
        if (err) throw err;
        else {
          if (check) {
            console.log("Login: ", user.id, " ", date.toString());
            res.redirect("./");
          } else {
            console.log("Login Failure");
          }
        }
      });
    })
    .catch(err => console.log("Error in getting user from database: " + err));
});
router.get("/register", (req, res) =>
  res.status(200).sendFile(path.join(public, "/register.html"))
);
router.post("/register", (req, res) => {
  const user = new User();

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) throw err;
    else {
      user.dept = req.body.dept;
      user.id = req.body.id;
      user.password = hash;
      user
        .save()
        .then(user => console.log("User Created"))
        .catch(err =>
          console.log("Error in saving user data on server: " + err)
        );
    }
    res.redirect("./login");
  });
});

module.exports = router;
