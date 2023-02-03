import axios from 'axios'
const loginUrl = 'https://shopping-kart-2.onrender.com/api/login'
const registerUrl = 'https://shopping-kart-2.onrender.com/api/users'

const login = async user => {
  const request = axios.post(loginUrl, user)
  return request.then(response => response.data)
}

const register = async user => {
  const request = axios.post(registerUrl, user)
  return request.then(response => response.data)
}

export default { login, register }
