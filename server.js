const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database.js')

const app = express();

app.use(logger('dev'));
app.use(express.json());
// Put API routes here, before the "catch all" route
app.use('/api/contact', require('./routes/api/contact.js'));

app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  //configure to use unused port
// development to avoid collision with React's dev server
const port = process.env.PORT;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});