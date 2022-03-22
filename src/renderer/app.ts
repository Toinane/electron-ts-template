import { APIWindow } from './types/api'

declare const window: APIWindow

async function loadPage() {
    const p = document.createElement('p')

    p.textContent = await window.api.getMessage()
    document.body.appendChild(p)
}

window.addEventListener('DOMContentLoaded', loadPage)
