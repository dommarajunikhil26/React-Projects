const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const {xss} = require('express-xss-sanitizer'); //This is a middleware that helps us from people breaking our server
const mongoSanitize = require('express-mongo-sanitize'); // To block the harmful requests to server

const routes = require('./routes');
require('dotenv').config();

const {handleError, convertToApiError} = require('./middleware/apiError');
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority&appName=${process.env.DB_APPNAME}`
mongoose.connect(mongoUri);

// Enable CORS for all requests
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions));

// body parser
app.use(express.json())

// sanitize
app.use(xss());
app.use(mongoSanitize());

// passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// routes
app.use('/api', routes);


// Handle Api errors
app.use(convertToApiError);
app.use((err, req, res, next) => {
    handleError(err, res)
})

const port = process.env.PORT;
app.listen(port,() =>{
    console.log(`App listening at port ${port}`);
});