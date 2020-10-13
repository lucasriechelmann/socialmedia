const { Model } = require("sequelize")

module.exports = (sequelize, type, entities) => {
    class Comment extends Model{

    }

    Comment.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        text:{
            type: type.STRING(500),
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
                model: entities.user,
                key: "id"
            }            
        },
        postId: {
            type: type.INTEGER,
            allowNull: false,
            references:{
                model: entities.post,
                key: "id"
            }
        }
    },{
        sequelize,
        modelName: "Comment"
    })
    return Comment
}