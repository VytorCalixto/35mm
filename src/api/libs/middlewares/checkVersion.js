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

const curPath = process.cwd();
const libs = `${process.cwd()}/libs`;
const log = require(`${libs}/log`);
const packageConf = require(`${curPath}/package.json`);

module.exports = () => {
    // Parse version number from strings such as 'v4.2.0' or `>=4.0.0'
    function parseVersionNumber(versionString) {
        return parseFloat(versionString.replace(/[^\d\.]/g, ''));
    }
    // Ensure minimum supported node version is used
    const minNodeVersion = parseVersionNumber(packageConf.engines.node);
    const currentNodeVersion = parseVersionNumber(process.version);
    if (minNodeVersion > currentNodeVersion) {
        log.error(`You must upgrade node to >=${minNodeVersion}.x to use simcaq-node!`);
        return false;
    } else {
        log.info('Node version should work!');
        return true;
    }
};
