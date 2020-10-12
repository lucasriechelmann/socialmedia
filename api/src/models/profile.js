const { Model } = require("sequelize")

module.exports = (sequelize, type, user) => {
    class Profile extends Model{
    }
    Profile.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: type.STRING(50),
            allowNull: false
        },
        surName:{
            type: type.STRING(100),
            allowNull: false
        },
        userId: {
            type: type.INTEGER,
            allowNull: false,
            references:{
                model: user,
                key: "id"
            }
            
        }
    },{
        sequelize,
        modelName: "Profile"
    })
    return Profile
}