const { Model } = require("sequelize")

module.exports = (sequelize, type, entities) =>{
    class Like extends Model{

    }

    Like.init({
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        like:{
            type: type.BOOLEAN,
            allowNull: false
        },
        dislike:{
            type: type.BOOLEAN,
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
            allowNull: true,
            references:{
                model: entities.post,
                key: "id"
            }
        },
        commentId:{
            type: type.INTEGER,
            allowNull: true,
            references:{
                model: entities.comment,
                key: "id"
            }
        }
    },{
        sequelize,
        modelName: "Like"
    })
    return Like
}