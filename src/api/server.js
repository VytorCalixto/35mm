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
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const libs = `${process.cwd()}/libs`;
const config = require(`${libs}/config`);
const log = require(`${libs}/log`);
const app = require(`${libs}/app`);
const compatVersion = require(`${libs}/middlewares/checkVersion`);
const cluster = require('cluster');

// Check if Node version is compatible
if (!compatVersion()) {
    process.exit(1);
}

if(cluster.isMaster) {
    log.info(`Master ${process.pid} is running`);

    const numCPUs = (process.env.NODE_ENV != 'development') ? require('os').cpus().length : 1;
    log.info(`Master will create ${numCPUs} workers`);
    for(let i=0; i < numCPUs; ++i) {
        cluster.fork();
    }

    // If an instance dies
    cluster.on('exit',  (worker, code, signal) => {
        log.info(`Worker ${worker.process.pid} died`);
        // Revive!
        cluster.fork();
    });
} else {
    // Set default port: first environment variable PORT, then configuration and last 3000
    app.set('port', process.env.PORT || config.port || 3000);
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    // Set default ip: first environment variable IOP, then configuration and last '127.0.0.1'
    app.set('ip', process.env.IP || config.ip || '127.0.0.1');

    const server = app.listen(app.get('port'), () => {
        log.info(`Express server listening on port ${server.address().port}`);
    });

    log.info(`Worker ${cluster.worker.id} is running (${process.pid})`);

    // For testing
    module.exports = server;
}
