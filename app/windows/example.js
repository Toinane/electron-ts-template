const window = require('../common/window');

class example extends window {
    constructor() {
        super('example');
    }
}

module.exports = new example();
