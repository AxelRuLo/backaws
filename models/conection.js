const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("userDB", "root", "root", {
    host: "172.17.0.2",
    dialect: "mysql"
});

const testDb = async () => {
    try {
        await sequelize.sync({alter: true})
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize)



module.exports = { db, testDb };