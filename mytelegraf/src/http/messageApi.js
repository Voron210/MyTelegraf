import { $authHost } from "./index"

export const createMessage = async (content) => {
    const { data } = await $authHost.post('/message', { content })
    return data
}

export const deleteMessage = async (id) => {
    const { data } = await $authHost.delete('/message', { id })
    return data
}

export const getAllMessage = async (dialogId) => {
    const { data } = await $authHost.post('/message/id', { dialogId })
    return data
}