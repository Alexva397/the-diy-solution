const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./passport');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(session({
  secret: process.env.SESS_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: true,
}));


app.use(cookieParser(process.env.SESS_SECRET || 'supersecret'));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diydb', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log('successful db connection')
);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
