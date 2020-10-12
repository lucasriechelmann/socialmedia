const database = require("../config/database")

module.exports = {
    async getAll(obj){
        switch(true){
            case obj.postId:
                return await database.like.findAll({postId: obj.postId})
            case obj.commentId:
                return await database.like.findAll({commentId: obj.commentId})
            default:
                return await database.like.findAll()
        }        
    },
    async get(id){
        return await database.like.findByPk(id)
    },
    async update(id, obj){
        let { like, dislike, postId, commentId } = obj

        let lik = await database.like.findByPk(id)
        lik.like = like
        lik.dislike = dislike
        lik.postId = postId
        lik.commentId = commentId
        await lik.save()
        return lik
    },
    async delete(id){
        let like = await database.like.findByPk(id)
        await like.destroy()
        return like
    },
    async insert(obj){
        let { like, dislike, postId, commentId, userId } = obj
        let lik = await database.like.create({ like, userId, postId, like, dislike, commentId })
        return lik
    }
}