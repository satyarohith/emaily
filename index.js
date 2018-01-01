const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  Keys = require('./config/keys');

// google keys
/*
* client ID: 786186387466-onsm9mpg3d923egcpri0cq4cnu2k8id0.apps.googleusercontent.com 
* Client Secret: AYm3mkA1SOWX8QzhDIUfjVXY 
*/

// passport stuff
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

// Routes
app.get('/', (req, res) => {
  res.send('Hello There');
});

app.get(
  '/a/g', // url
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/a/g/cb', passport.authenticate('google'));
// App Listens here
app.listen(port, () => {
  console.log(`server running at localhost:${port}`);
});
