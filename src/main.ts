import './utils/errors'

import { app /*shell*/ } from 'electron'
// import { URL } from 'url';

import example from './windows/example'

const initApp = () => {
    example.showBrowserWindow()
}

app.on('ready', initApp)

/**
 * ==========================
 * Security options
 * ==========================
 */
app.on('web-contents-created', (event, contents) => {
    /**
     * If your app need to navigate, uncomment the condition and update it.
     */
    contents.on('will-navigate', (event /*navigationUrl*/) => {
        // const parsedUrl = new URL(navigationUrl);
        // if (parsedUrl.origin !== 'https://example.com') {
        event.preventDefault()
        //}
    })

    /**
     * We block the creation of new window and open the link in a good navigator.
     */
    contents.setWindowOpenHandler((/*{ url }*/) => {
        // URLs should be allowed through to shell.openExternal.
        // if (isSafeForExternalOpen(url)) {
        //   setImmediate(() => {
        //     shell.openExternal(url)
        //   })
        // }

        return { action: 'deny' }
    })
})
