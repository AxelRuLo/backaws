module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        iduser: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userprofile_iduserprofile: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
    }, { freezeTableName: true, timestamps: false });

    return User;
};