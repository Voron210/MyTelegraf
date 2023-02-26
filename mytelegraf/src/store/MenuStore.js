import { makeAutoObservable } from "mobx"
import { COMINGSOON, DIALOG_ROUTE, USER_ROUTE } from "../utils/consts"

export default class MenuStore {
    constructor() {
        this._menu = [
            { id: 1, name: "Users", component: "user", route: USER_ROUTE},
            { id: 2, name: "Dialog", component: "dialog", route: DIALOG_ROUTE},
            { id: 3, name: "Coming soon", component: "ComingSoon", route: COMINGSOON}
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