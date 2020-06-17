'use strict'

// Constants
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const express = require('express');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const Keygrip = require('keygrip');
require('colors');
require('dotenv').config();


app.use(cors());
app.use(helmet());
app.disable('x-powered-by');
app.use(cookieSession({
    name: 'session',
    keys: new Keygrip(['SEKRIT2', 'SEKRIT2'], 'SHA384', 'base64'),
    maxAge: 5 * 100
}))
app.use(function (req, res, next) {
    req.session.nowInMinutes = Math.floor(Date.now() / 5e3)
    next()
});


//Status
app.get('/', (req, res) => res.json({ status: 'Api Working! ' }));

//Routes
app.use('/api', require("./src/routes/CalculateRoutes.js"));
app.use('/', require("./src/routes/SwaggerRoutes"));

//Error 404
app.get('*', (req, res) => {
    res.send({ Error: 'Invalid Command, Access /docs' });
});

//Port
app.listen(PORT, HOST);
console.log('\n' + `Visit http://localhost:${PORT}/docs`.blue, '\n');



module.exports = app;
