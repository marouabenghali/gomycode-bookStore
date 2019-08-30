const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Customer = require("../models/customers");

const keys = require('../config/keys');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport =>  {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Customer.findById(jwt_payload.id)
            .then(customer => {
                if(customer) {
                    return done(null, customer)
                } else {
                    return done(null, false)
                }
            })
            .catch(err => console.log(err))
    }))
}