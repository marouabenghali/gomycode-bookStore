const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const Admin = require("../models/admins");

router.get("/", (req, res) => {
  Admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.send("cannot get"));
});

//route: http://localhost:5000/users/register
//desc: register new user
//isPrivate: false
router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email }).then(admin => {
    if (admin) {
      return res.json({ msg: "admin already exist" });
    }
    const newAdmin = new Admin({
      name: name,
      email: email,
      password: password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newAdmin.password, salt, (err, hash) => {
        newAdmin.password = hash;

        newAdmin
          .save()
          .then(saved => res.json(saved))
          .catch(err => console.log(err));
      });
    });
  });
});

//route: http://localhost:5000/users/login
//desc: login user
//isPrivate: false
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email }).then(admin => {
    if (!admin) {
      return res.json({ msg: "email not found" });
    }
    bcrypt.compare(password, admin.password).then(isMatched => {
      if (isMatched) {
        const payload = { id: admin.id, email: admin.email };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token: "Bearer " + token });
          }
        );
      } else {
        return res.json({ msg: "password incorrect" });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.admin);
  }
);

module.exports = router;