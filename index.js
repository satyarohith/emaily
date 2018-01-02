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
// google keys
/*
* client ID: 786186387466-onsm9mpg3d923egcpri0cq4cnu2k8id0.apps.googleusercontent.com 
* Client Secret: AYm3mkA1SOWX8QzhDIUfjVXY 
*/

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
