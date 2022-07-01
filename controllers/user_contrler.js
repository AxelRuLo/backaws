const db = require("../models/conection")
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

async function deleteUser(id) {
    const deletedUser = await User.destroy({
        where: {
            iduser: id
        }
    });
    return deletedUser
}
async function modifiedUsuario(user) {
    resultado = await User.update({ password: user.password }, {
        where: {
            email: user.email
        }
    })
        .then(result => result)
        .catch(error => false);
    return resultado
}


controlerUser = {}
controlerUser.create = createUser
controlerUser.getAll = getUsers
controlerUser.delete = deleteUser
controlerUser.modified = modifiedUsuario

module.exports = { controlerUser }