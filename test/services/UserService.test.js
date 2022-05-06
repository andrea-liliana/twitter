const User = require('../../app/models/user');
const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "andrea-liliana", "Andrea")
        expect(user.username).toBe("andrea-liliana")
        expect(user.name).toBe("Andrea")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "andrea-liliana", "Andrea")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("andrea-liliana")
        expect(userInfoInList[2]).toBe("Andrea")
        expect(userInfoInList[3]).toBe("Sin Bio")
    });

    test("3. Update username", () => {
        const user = UserService.create(1, "andrea-liliana", "Andrea")
        UserService.updateUserUsername(user, "andrea-gomez")
        expect(user.username).toBe("andrea-gomez")
    });

    test("4. Given a list of users give the list of usernames", () => {
        const user1 = UserService.create(1, "andrea-liliana1", "Andrea")
        const user2 = UserService.create(1, "andrea-liliana2", "Andrea")
        const user3 = UserService.create(1, "andrea-liliana3", "Andrea")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("andrea-liliana1")
        expect(usernames).toContain("andrea-liliana2")
        expect(usernames).toContain("andrea-liliana3")
    });
})