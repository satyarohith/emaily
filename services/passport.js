const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  mongoose = require('mongoose'),
  Keys = require('../config/Keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: Keys.googleClientID,
      clientSecret: Keys.googleClientSecret,
      callbackURL: '/a/g/cb'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // User already exists do something!
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new recor
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
