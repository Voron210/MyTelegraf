import { makeAutoObservable } from "mobx"

export default class MessageStore {
    constructor() {
        this._messagelist = [
            { id: 1, name: "Hi" },
            { id: 2, name: "Hello" },
            { id: 3, name: "How are u" },
            { id: 4, name: "kek andrew" }
        ]
        makeAutoObservable(this)
    }

    get messagelist() {
        return this._messagelist
    }
}