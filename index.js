const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Keys = require('./config/Keys');
require('./models/User');
require('./services/passport');

mongoose.connect(Keys.mongoURI);
// google keys
/*
* client ID: 786186387466-onsm9mpg3d923egcpri0cq4cnu2k8id0.apps.googleusercontent.com 
* Client Secret: AYm3mkA1SOWX8QzhDIUfjVXY 
*/

// passport stuff

// Routes
require('./routes/authRoutes')(app);

// App Listens here
app.listen(port, () => {
  console.log(`server running at localhost:${port}`);
});
