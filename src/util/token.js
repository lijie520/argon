/*
    author: lijie
    time: 2020/6/16 11:33
    description: token 存储在 cookie
*/
import Cookies from 'js-cookie'

const TokenKey = 'argon-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
