const database = require("../config/database")

module.exports = {
    async getAll(){
        return await database.post.findAll()
    },
    async get(id){
        return await database.post.findByPk(id)
    },
    async update(id, obj){
        let { text, likes, dislikes } = obj

        let pos = await database.post.findByPk(id)
        pos.text = text
        pos.likes = likes ?? post.likes
        pos.dislikes = dislikes ?? post.dislikes
        await pos.save()
        return pos
    },
    async delete(id){
        let post = await database.post.findByPk(id)
        await post.destroy()
        return post
    },
    async insert(obj){
        let { text, userId, postId } = obj
        let pos = await database.post.create({ text, userId, postId, likes: 0, dislikes: 0 })
        return pos
    }
}