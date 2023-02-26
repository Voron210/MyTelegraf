import { makeAutoObservable } from "mobx"

export default class MessageStore {
    constructor() {
        this._messagelist = []
        this._messageName = ""
        makeAutoObservable(this)
    }

    get messagelist() {
        return this._messagelist
    }

    get messageName() {
        return this._messageName
    }

    setMessages(messagelist) {
        this._messagelist = messagelist
    }

    setName(name) {
        this._messageName = name
    }
}