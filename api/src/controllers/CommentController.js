const CommentRepository = require("../repositories/CommentRepository")

module.exports = {
    async index(request, response){
        let objs = await CommentRepository.getAll(request.query.postId)
        response.json(objs)
    },
    async show(request, response){
        let obj = await CommentRepository.get(request.params.id)
        response.json(obj)
    },
    async destroy(request, response){
        let obj = await CommentRepository.delete(request.params.id)
        response.json(obj)
    },
    async update(request, response){
        let obj = await CommentRepository.update(request.params.id, request.body)
        response.json(obj)
    },
    async store(request, response){
        let obj = await CommentRepository.insert(request.body)
        response.json(obj)
    }
}