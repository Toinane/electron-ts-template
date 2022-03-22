export interface API {
    getMessage: () => Promise<string>
}

export interface APIWindow extends Window {
    api: API
}
