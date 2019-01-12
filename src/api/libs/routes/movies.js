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

const movieApp = express();

const libs = `${process.cwd()}/libs`;

const config = require(`${libs}/config`);

const log = require(`${libs}/log`);

const Movie = require(`${libs}/models/movie`);

// Get all movies
movieApp.get('/', (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            log.error(err);
            return next(err);
        }
        return res.json({movies});
    });
});

movieApp.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id, (err, movie) => {
        if(err) {
            log.error(err);
            return next(err);
        }

        return res.json({movie});
    });
});

movieApp.post('/', (req, res, next) => {
    // TODO: Criar filme
    return res.json({todo: true});
});

movieApp.put('/:id', (req, res, next) => {
    // TODO: Atualizar filme
    return res.json({todo: true});
});

module.exports = movieApp;