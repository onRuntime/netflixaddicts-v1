const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    sequelize = require('sequelize'),
    User = require('../models/User');

const verifyUserHandler = (
    email,
    password,
    done
) => {
    const user = User.findAll({
        where: {
            email: email
        }
    });

    if (!user || !user.isValidPassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
    }
    return done(null, user);
};

const strategy = new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]'
}, verifyUserHandler);

passport.use(strategy);