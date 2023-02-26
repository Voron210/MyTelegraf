import { makeAutoObservable } from "mobx"

export default class NewsStore {
    constructor() {
        this._newslist = []
        makeAutoObservable(this)
    }

    get newslist() {
        return this._newslist
    }

    setNews(news) {
        this._newslist = news
    }

    addNews(news) {
        this._newslist.unshift(news)
    }
}