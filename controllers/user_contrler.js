const db  = require("../models/conection")
const User = db.db.user




async function createUser(newUser) {


    isUserCreated = await User.create({
        email: newUser.email,
        password: newUser.password,
    })
        .then(result => result)
        .catch(error => false)
    return isUserCreated == false ? "someting went wrong during the user creation" : true
}

async function getUsers() {
    const userSearched = await User.findAll();
    return userSearched
}


controlerUser = {}
controlerUser.create = createUser
controlerUser.getAll = getUsers
// controlerUser.login = login
// controlerUser.change = changePassword

module.exports = { controlerUser }