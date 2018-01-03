const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Keys = require('./config/Keys'),
  cookieSession = require('cookie-session'),
  passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(Keys.mongoURI);

// passport stuff

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Routes
require('./routes/authRoutes')(app);

// App Listens here
app.listen(port, () => {
  console.log(`server running at localhost:${port}`);
});
