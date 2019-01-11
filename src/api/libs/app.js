/*
35mm API
Copyright (C) 2018 Vytor Calixto

This file is part of 35mm.

35mm is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

35mm is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with 35mm.  If not, see <https://www.gnu.org/licenses/>.
*/
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const libs = `${process.cwd()}/libs`;

const log = require(`${libs}/log`);

const config = require(`${libs}/config`);

const app = express();

const api = require('./routes/api');

const mongoose = require(`${libs}/db/mongoose`);

const db = mongoose();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(methodOverride());

// Mounts all API routes under /api/v1
app.use('/api/v1', api);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404);
    log.error(`${req.method} ${res.statusCode} ${req.url}`);
    res.json({ error: 'Error 404: Page not found' }).end();
});

// Express' default error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    log.error(`${req.method} ${res.statusCode} ${err.message}`);
    log.error(`Route: ${req.originalUrl}`);
    log.error(err);
    res.json({ error: err.message }).end();
});

module.exports = app;
