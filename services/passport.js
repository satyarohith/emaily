const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  Keys = require('../config/Keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: Keys.googleClientID,
      clientSecret: Keys.googleClientSecret,
      callbackURL: '/a/g/cb'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access Token:', accessToken);
      console.log('refresh Token:', refreshToken);
      console.log('Profile :', profile);
    }
  )
);
