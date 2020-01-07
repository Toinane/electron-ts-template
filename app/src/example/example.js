window.ipc.send('example-start');

window.ipc.on('example-about', (_, message) => {
    console.log('detect request from main.');
    document.querySelector('span').innerHTML = message;
});
