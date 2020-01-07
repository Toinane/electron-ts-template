const { ipcMain, app } = require('electron');
const window = require('../common/window');

class example extends window {
    constructor() {
        super('example');
    }

    events() {
        ipcMain.on('example-start', () => {
            console.log('received event from renderer');

            this.sendEvent('example-about', app.getVersion());
        });
    }
}

module.exports = new example();
