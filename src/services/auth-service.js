import config from '../config'

const AuthService = {
  login(user_name, password) {
    const credentials = {
      user_name,
      password
    }
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default AuthService