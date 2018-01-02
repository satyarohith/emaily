const passport = require('passport');

module.exports = app => {
  app.get(
    '/a/g', // url
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/a/g/cb', passport.authenticate('google'));
};
