const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, "Sin Bio"]
    }

    static updateUserUsername(user, newUserName){
        return user.username = newUserName
    }

    static getAllUsernames(usersList){
        return usersList.map(user => user.username)
    }
}

module.exports = UserService