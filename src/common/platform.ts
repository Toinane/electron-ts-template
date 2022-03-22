import process from 'process'
import { app } from 'electron'

enum Platform {
    'aix',
    'darwin',
    'freebsd',
    'linux',
    'openbsd',
    'sunos',
    'win32',
}

const win = process.platform === 'win32'
const osx = process.platform === 'darwin'
const linux = !['win32', 'darwin'].includes(process.platform)

export const is = {
    win,
    osx,
    linux,
    dev: !app.isPackaged,
    one: (platform: Platform, ...conditions: Platform[]) => conditions.includes(platform),
    all: (platform: Platform, ...conditions: Platform[]) => !conditions.includes(platform),
}
