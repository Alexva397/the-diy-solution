const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();



app.use(cookieParser("supersecret"));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(session({
  secret: "supersecret",
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diydb', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('successful db connection')
);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
