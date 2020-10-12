const { Model } = require("sequelize")

module.exports = (sequelize, type, user) =>{
    class Post extends Model{

    }

    Post.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        text: {
            type: type.STRING(50),
            allowNull: false
        },
        likes:{
            type: type.INTEGER,
            allowNull: false
        },
        dislikes:{
            type: type.INTEGER,
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
        modelName: "Post"
    })
    return Post
}