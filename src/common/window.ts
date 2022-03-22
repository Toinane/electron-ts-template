import path from 'path'
import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron'

class window {
    windowParams = {
        minWidth: 500,
        minHeight: 300,
    }

    name: string
    securityParams: BrowserWindowConstructorOptions
    window: BrowserWindow | undefined

    constructor(name: string) {
        this.name = name
        this.securityParams = {
            webPreferences: {
                sandbox: true,
                preload: path.join(__dirname, 'preload.js'),
            },
        }
    }

    showBrowserWindow() {
        this.window = new BrowserWindow({
            ...this.securityParams,
            ...this.windowParams,
        })
        this.window.loadURL('./dist/index.html')
        this.window.on('closed', this.closeWindow)
        this.events()

        return this.window
    }

    closeWindow() {
        if (this.window) this.window.close()
        this.window = undefined
    }

    getWindow() {
        if (this.window instanceof BrowserWindow) {
            return this.window
        } else {
            return
        }
    }

    events() {
        return
    }

    sendEvent(channel: string, ...args: unknown[]) {
        if (!this.window) return

        return this.window.webContents.send(channel, args)
    }
}

export = window
