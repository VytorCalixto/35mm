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

describe('API is running', () => {
    it('should respond it\'s running', (done) => {
        chai.request(server)
            .get('/api/v1')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('msg');
                done();
            })
    });

    it('should respond with 404 error', (done) => {
        chai.request(server)
            .get('/api/v1/thisrouteshouldgivea404')
            .end((err, res) => {
                res.should.have.status(404);
                res.should.be.json;
                res.body.should.have.property('error');
                done();
            })
    });
});
