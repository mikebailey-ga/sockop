require('dotenv').config();
require('./config/database');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build')));

//Routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname,'build','index.html'));
});

//Server
const port = process.env.PORT || 3002;

app.listen(port,function(){
  console.log(`App is listening on port ${port}`);
});