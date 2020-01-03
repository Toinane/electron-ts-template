require('./common/error.helper');
const { app } = require('electron');

const example = require('./windows/example');

function initApp() {
    example.showBrowserWindow();
}

app.on('ready', initApp);
