const LikeRepository = require("../repositories/LikeRepository")

module.exports = {
    async index(request, response){
        let { postId, commentId} = request.query
        let objs = await LikeRepository.getAll({postId, commentId})
        response.json(objs)
    },
    async show(request, response){
        let obj = await LikeRepository.get(request.params.id)
        response.json(obj)
    },
    async destroy(request, response){
        let obj = await LikeRepository.delete(request.params.id)
        response.json(obj)
    },
    async update(request, response){
        let obj = await LikeRepository.update(request.params.id, request.body)
        response.json(obj)
    },
    async store(request, response){
        console.log(request.body)
        let obj = await LikeRepository.insert(request.body)
        response.json(obj)
    }
}