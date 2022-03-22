import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
    getMessage: () => ipcRenderer.invoke('load-example'),
})
