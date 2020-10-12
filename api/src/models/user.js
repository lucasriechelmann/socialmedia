const { Model } = require("sequelize")
module.exports = (sequelize, type) => {
    class User extends Model{
    }
    User.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: type.STRING(100),
            allowNull: false
        },
        password:{
            type: type.STRING(50),
            allowNull: false
        },
        active: {
            type: type.BOOLEAN,
            allowNull: false
        },
        confirmationGuid:{
            type: type.STRING(50),
            allowNull: true
        }
    },{
        sequelize,
        modelName: "User"
    })
    return User
}