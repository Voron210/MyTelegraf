import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._nickname = ""
        this._userlist = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setList(list) {
        this._userlist = list
    }

    setUser(user) {
        this._user = user
    }

    setNickname(nickname) {
        this._nickname = nickname
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get nickname() {
        return this._nickname
    }

    get list() {
        return this._userlist
    }
}