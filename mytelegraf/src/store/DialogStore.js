import { makeAutoObservable } from "mobx"

export default class DialogStore {
    constructor() {
        this._dialoglist = [
            { id: 1, name: "Andrew" },
            { id: 2, name: "Nastya" },
            { id: 3, name: "1" },
            { id: 4, name: "2" }
        ]
        makeAutoObservable(this)
    }

    get dialoglist() {
        return this._dialoglist
    }
}