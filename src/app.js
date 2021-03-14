const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const userRouter = require('./routers/user');
const cors = require('cors');

app.use(cors());
app.use(morgan(':method :url Status\: :status Response_Time\: :response-time'));

// parse the incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// register routers
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("Welcome to the REST API of ...");
})

module.exports = app
