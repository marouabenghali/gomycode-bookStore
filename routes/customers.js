const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// const passportclient = require("../config/passportclient");

// Contact Model
const Customers = require("../models/customers");

router.get("/", (req, res) => {
  Customers.find()
    .then(customer => res.json(customer))
    .catch(err => res.send("cannot get"));
});

router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordconfirmation=req.body.passwordconfirmation;

  Customer.findOne({ email }).then(customer => {
    if (customer) {
      return res.json({ msg: "customer already exist" });
    }
    const newCustomer = new Customer({
      name: name,
      email: email,
      password: password,
      passwordconfirmation:passwordconfirmation
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newCustomer.password, salt, (err, hash) => {
        newCustomer.password = hash;

        newCustomer
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

  Customer.findOne({ email }).then(customer => {
    if (!customer) {
      return res.json({ msg: "email not found" });
    }
    bcrypt.compare(password, customer.password).then(isMatched => {
      if (isMatched) {
        const payload = { id: customer.id, email: customer.email };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token: "Bearer " + token ,user:{id: customer.id, email: customer.email}});
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
    res.json(req.customer);
  }
);

module.exports = router;