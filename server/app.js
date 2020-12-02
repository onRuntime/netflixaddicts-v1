const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler'),
    Sequelize = require('sequelize');

require('dotenv').config()

const routes = require('./routes');

const devMode = process.env.NODE_ENV !== 'production';

const app = express();

if (!devMode) { app.use(cors()); }

// - Middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// - SSR / Renders static pages
app.use(express.static(__dirname + '/public'));

// - Database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb'
});
sequelize.authenticate();

// - Register Models
require('./models/User');

// - Passport initialization
require('./config/passport');

// - Register routes
app.use(routes);

// - Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// - Handles development and production errors
if (devMode) {
    app.use(errorhandler());

    app.use((err, req, res, next) => {
        console.log(err.stack);

        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: {}
            }
        });
    });
}

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}`)
});