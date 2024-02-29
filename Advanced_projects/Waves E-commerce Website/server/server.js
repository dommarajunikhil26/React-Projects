const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {xss} = require('express-xss-sanitizer'); //This is a middleware that helps us from people breaking our server
const mongoSanitize = require('express-mongo-sanitize'); // To block the harmful requests to server
const routes = require('./routes');
require('dotenv').config();

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority&appName=${process.env.DB_APPNAME}`
mongoose.connect(mongoUri);

// body parser
app.use(express.json())

// sanitize
app.use(xss());
app.use(mongoSanitize());

// routes
app.use('/api', routes);


const port = process.env.PORT;
app.listen(port,() =>{
    console.log(`App listening at port ${port}`);
});