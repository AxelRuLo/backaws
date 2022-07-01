const db  = require("../models/conection")
const User = db.db.user

async function isTakenUser(newUser) {
    const userSearched = await User.findOne({ where: { email: newUser.email } });
    return userSearched == null ? false : true
}


async function createUser(newUser) {
    if (await isTakenUser(newUser)) {
        return "the user is already taken"
    }
    isProfileCreated = await profileController.controlerUserProfile.create(newUser)
    if (isProfileCreated == false) {
        return "something went wrong during the profile creation"
    }
    hashedPassword = bycript.hashSync(newUser.password, 10)
    isUserCreated = await User.create({
        email: newUser.email,
        password: hashedPassword,
        userprofile_iduserprofile: isProfileCreated.dataValues.iduserprofile
    })
        .then(result => result)
        .catch(error => false)
    return isUserCreated == false ? "someting went wrong during the user creation" : true
}


controlerUser = {}
controlerUser.create = createUser
// controlerUser.login = login
// controlerUser.change = changePassword

module.exports = { controlerUser }