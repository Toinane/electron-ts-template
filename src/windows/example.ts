import { ipcMain, app } from 'electron'
import window from '../common/window'

class example extends window {
    constructor() {
        super('example')
    }

    events() {
        ipcMain.handle('load-example', () => {
            console.log('received event from renderer')

            return app.getVersion()
        })
    }
}

export = new example()
