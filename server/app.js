// app.js

// Require modules.
const express      = require('express');
const path         = require('path');
const bodyparser   = require('body-parser');
const mongoose     = require('mongoose');
const log          = require('log-util');
require('dotenv').config();


// Include routes.
const api          = require('./routes/api');
// Set up an application.
const app = express();
// Set up a middleware.
const jsonParser = bodyparser.json();


// DB connection.
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0-shard-00-00-zvga2.mongodb.net`
           +`:27017,cluster0-shard-00-01-zvga2.mongodb.net:27017,cluster0-shard-00-02-zvga2.mongodb.net`
           +`:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

mongoose.connect(uri)
          .then(() => { log.info('DB connection successful!'); })
          .catch((err) => { log.error(`DB connection error: ${err}`); });

app.use(bodyparser.urlencoded({extended: true}));


// Set up routes.
app.use('/api', jsonParser, api);
app.use('/', express.static('../client/dist'));
app.use('/yosemite', express.static('../client/dist'));
app.use(express.static('./public'));    // use static files from a public folder


// Handle http 404 response
app.use((req, res, next)=>{
  res.status(404).redirect('/404page.html');
  next();
});

module.exports = app;
