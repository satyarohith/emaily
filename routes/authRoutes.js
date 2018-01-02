const passport = require('passport');

module.exports = app => {
  app.get(
    '/a/g', // url
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/a/g/cb', passport.authenticate('google'));

  app.get('/api/lg', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current-user', (req, res) => {
    res.send(req.user);
  });
};
