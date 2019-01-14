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
process.env.NODE_ENV = 'test';

const chai = require('chai');

const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);

const chaiHttp = require('chai-http');

const assert = chai.assert;

const expect = chai.expect;

const should = chai.should(); // actually call the function

const libs = `${process.cwd()}/libs`;

const server = require(`${libs}/app`);

chai.use(chaiHttp);

const Movie = require(`${libs}/models/movie`);

const log = require(`${libs}/log`);

describe('Movie requests', () => {

    before(() => {
        Movie.remove({}, (err) => {
            log.info('Movie test collection purged');
        })
    })

    it('should respond with empty array', (done) => {
        chai.request(server)
            .get('/api/v1/movies')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movies');
                res.body.movies.should.be.an('array').that.is.empty;
                done();
            })
    });

    let movie = {
        "title": "Ratatouille",
        "genre": "Animation, Adventure, Comedy, Drama, Family, Fantasy",
        "release_date": "29 Jun 2007",
        "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        "trailer": "https://www.youtube.com/watch?v=c3sBBRxDAqk"
    };
    let movieId;

    it('should add a movie', (done) => {
        chai.request(server)
            .post('/api/v1/movies')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(movie)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movie');
                res.body.movie.should.be.an('object');
                res.body.movie.should.have.property('_id');
                movieId = res.body.movie._id;
                done();
            })
    });

    it('should get a movie', (done) => {
        chai.request(server)
            .get('/api/v1/movies/' + movieId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movie');
                res.body.movie.should.be.an('object');
                res.body.movie.should.have.property('_id');
                done();
            })
    });

    it('should update a movie', (done) => {
        movie.release_date = '29/06/2007';
        chai.request(server)
            .put('/api/v1/movies/' + movieId)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(movie)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movie');
                res.body.movie.should.be.an('object');
                res.body.movie.should.have.property('_id');
                res.body.movie.release_date.should.be.equal('29/06/2007');
                done();
            })
    });

    it('should respond with non array', (done) => {
        chai.request(server)
            .get('/api/v1/movies')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movies');
                res.body.movies.should.be.an('array').that.is.not.empty;
                done();
            })
    });

    it('should delete a movie', (done) => {
        chai.request(server)
            .delete('/api/v1/movies/' + movieId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movie');
                res.body.movie.should.be.an('string');
                done();
            })
    });

    it('should respond with empty array', (done) => {
        chai.request(server)
            .get('/api/v1/movies')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('movies');
                res.body.movies.should.be.an('array').that.is.empty;
                done();
            })
    });
});
