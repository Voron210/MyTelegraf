import { makeAutoObservable } from "mobx"

export default class DialogStore {
    constructor() {
        this._dialoglist = []
        this._dialogId = 0
        makeAutoObservable(this)
    }

    get dialoglist() {
        return this._dialoglist
    }

    get dialogId() {
        return this._dialogId
    }

    setDialog(dialogs) {
        this._dialoglist = dialogs
    }

    addDialog(dialog) {
        this._dialoglist.unshift(dialog)
    }

    setDialogId(id) {
        this._dialogId = id
    }

}