
export class RequiredNameAttribute extends Error {
    
    constructor(message: string) {
        super(message)
        this.name = "RequiredNameAttribute"
    }
}