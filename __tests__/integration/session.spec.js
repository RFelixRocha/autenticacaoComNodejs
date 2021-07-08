const { User } = require('../../src/app/models')

describe("Authentication", () => {

    it("should create user", async () => {
       
        const user = await User.create({
            name:"Raimundo Felix Da Rocha",
            email:"felix@gmail.com",
            password_hash:"khdnskhgflsdhjglsd"
        });

        console.log(user)

        expect(user.email).toBe('felix@gmail.com')
    })

})