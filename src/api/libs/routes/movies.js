/*
35mm API
Copyright (C) 2019 Vytor Calixto

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
    let movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        release_date: req.body.release_date,
        actors: req.body.actors,
        plot: req.body.plot,
        trailer: req.body.trailer,
        poster: req.body.poster
    });
    movie.save((err) => {
        if(err) {
            log.error(err);
            let errors = [];
            for(let errName in err.errors) {
                errors.push(err.errors[errName].message);
              }
              log.error(errors);
              res.statusCode = 400;
              return res.json({err, errors});
        }

        return res.json({movie});
    });
});

movieApp.put('/:id', (req, res, next) => {
    Movie.findById(req.params.id, (err, movie) => {
        if(err) {
            log.error(err);
            return next(err);
        }

        if(!movie) {
            res.statusCode = 404;
            return next({err: {message: 'Movie not found'}});
        }

        movie.title = req.body.title || movie.title;
        movie.genre = req.body.genre || movie.genre;
        movie.release_date = req.body.release_date || movie.release_date;
        movie.actors = req.body.actors || movie.actors;
        movie.plot = req.body.plot || movie.plot;
        movie.trailer = req.body.trailer || movie.trailer;
        movie.poster = req.body.poster || movie.poster;

        movie.save((err) => {
            if(err) {
                log.error(err);
                return next(err);
            }

            res.json({movie});
        });
    });
});

movieApp.delete('/:id', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            log.error(err);
            return next(err);
        }

        return res.json({movie: req.params.id});
    });
});

module.exports = movieApp;