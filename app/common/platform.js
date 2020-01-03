const process = require('process');

const win = process.platform === 'win32';
const osx = process.platform === 'darwin';
const linux = !['win32', 'darwin'].includes(process.platform);

module.exports = is = {
    win,
    osx,
    linux,
    one: (bool, ...conditions) => conditions.includes(bool),
    all: (bool, ...conditions) => !conditions.includes(!bool)
};
