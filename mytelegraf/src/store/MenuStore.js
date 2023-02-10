import { makeAutoObservable } from "mobx"

export default class MenuStore {
    constructor() {
        this._menu = [
            { id: 1, name: "Dialog", component: "dialog"},
            { id: 2, name: "Coming soon", component: "ComingSoon" },
            { id: 3, name: "Coming soon", component: "ComingSoon" },
            { id: 4, name: "Coming soon", component: "ComingSoon" }
        ]
        this._selectedMenu = {}
        makeAutoObservable(this)
    }

    setSelectedMenu(menu) {
        this._selectedMenu = menu
    }

    get menu() {
        return this._menu
    }

    get selectedMenu() {
        return this._selectedMenu
    }

}