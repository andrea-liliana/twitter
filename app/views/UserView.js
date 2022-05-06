const UserService = require('../services/userService')

class UserView {
  static createUser (payload) {
    if (!payload) return { error: 'payload no existe' } 
    for (const attribute in payload){ 
        if (!payload[attribute])  return {error: "necesitan tener un valor válido"} 
    }
    if (!(payload.id && payload.username && payload.name)) return { error: 'necesitan tener un valor válido' } 
    
    return UserService.create(payload.id, payload.username, payload.name)
  } 
}

module.exports = UserView