import process from 'process'

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err)
    process.exit(1)
})
