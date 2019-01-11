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

const api = express();

const libs = `${process.cwd()}/libs`;

const config = require(`${libs}/config`);

api.get('/', (req, res) => {
    res.json({ msg: '35mm API is running' });
});

// mount API routes
module.exports = api;
