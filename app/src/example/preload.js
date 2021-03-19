const SafeIpcRenderer = require('../common/safeIpcRenderer')

window.ipc = new SafeIpcRenderer(['example-start', 'example-about']);
