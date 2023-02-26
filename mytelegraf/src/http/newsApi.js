import { $authHost } from "./index"

export const createNews = async (name, content ) => {
    const { data } = await $authHost.post('/news', { name, content })
    return data
}

export const deleteNews = async (id) => {
    const { data } = await $authHost.delete('/news', { id })
    return data
}

export const getAllNews = async () => {
    const { data } = await $authHost.get('/news')
    return data
}