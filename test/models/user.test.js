const User = require('../../app/models/user')

describe("Unit Tests for User class", () => {

    test('Create an User object', () => {
        const user = new User(1, "andrea-liliana", "Andrea", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("andrea-liliana")
        expect(user.name).toBe("Andrea")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() 
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, "andrea-liliana", "Andrea", "Bio")
        expect(user.getUsername).toBe("andrea-liliana")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () => {
        const user = new User(1, "andrea-liliana", "Andrea", "Bio")
        user.setUsername = "Gomez"
        expect(user.username).toBe("Gomez")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    });
})