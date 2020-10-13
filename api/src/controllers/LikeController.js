const LikeRepository = require("../repositories/LikeRepository")
const likeRepository = new LikeRepository()

class LikeController{
    async index(request, response){
        let { postId, commentId} = request.query
        let objs = await likeRepository.getAll({postId, commentId})
        response.json(objs)
    }
    async show(request, response){
        let obj = await likeRepository.get(request.params.id)
        response.json(obj)
    }
    async destroy(request, response){
        let obj = await likeRepository.delete(request.params.id)
        response.json(obj)
    }
    async update(request, response){
        let obj = await likeRepository.update(request.params.id, request.body)
        response.json(obj)
    }
    async store(request, response){
        console.log(request.body)
        let obj = await likeRepository.insert(request.body)
        response.json(obj)
    }
}

module.exports = LikeController