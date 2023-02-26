import { $authHost, $host } from "./index"
import jwt_decode from 'jwt-decode'

export const registration = async (email, password, nickname) => {
    const { data } = await $host.post('/user/registration', { email, password, nickname })
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) =>{
    const { data } = await $host.post('/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getAllUser = async () => {
    const { data } = await $authHost.get('/user')
    return data
}

export const getUserInDialog = async (dialogId) => {
    const { data } = await $authHost.post('/user/dialogId', { dialogId })
    return data
}