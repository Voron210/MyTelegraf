import { $authHost } from "./index"

export const createDialog = async (name) => {
    const { data } = await $authHost.post('/dialog', { name })
    return data
}

export const deleteDialog = async (id) =>{
    const { data } = await $authHost.delete('/dialog', { id })
    return data
}

export const getAllDialog = async () => {
    const { data } = await $authHost.get('/dialog')
    return data
}