const database = require("../config/database")

class CommentRepository{
    async getAll(postId){
        return await (postId ? database.comment.findAll({where:{
            postId: postId
        }}) :
        database.comment.findAll())
    }
    async get(id){
        return await database.comment.findByPk(id)
    }
    async update(id, obj){
        let { text } = obj

        let com = await database.comment.findByPk(id)
        com.text = text
        await com.save()
        return com
    }
    async delete(id){
        let comment = await database.comment.findByPk(id)
        await comment.destroy()
        return comment
    }
    async insert(obj){
        let { text, userId, postId } = obj
        let com = await database.comment.create({ text, userId, postId, likes: 0, dislikes: 0 })
        return com
    }
}

module.exports = CommentRepository