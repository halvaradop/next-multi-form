
export class RequiredNameAttribute extends Error {
    
    constructor(message: string) {
        super(message)
        this.name = "RequiredNameAttribute"
    }
}

export class InvalidUseLocalStorage extends Error {

    constructor(message: string) {
        super(message)
        this.name = "InvalidUseLocalStorage"
    }
}