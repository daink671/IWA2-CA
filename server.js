const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const dbURI = process.env.DB_URL;

const routes = require('./routes/api');

//connect to mongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));



//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`server is running at ${PORT}`));