const CommentRepository = require("../repositories/CommentRepository")
const commentRepository = new CommentRepository()

class CommentController{
    async index(request, response){
        let objs = await commentRepository.getAll(request.query.postId)
        response.json(objs)
    }
    async show(request, response){
        let obj = await commentRepository.get(request.params.id)
        response.json(obj)
    }
    async destroy(request, response){
        let obj = await commentRepository.delete(request.params.id)
        response.json(obj)
    }
    async update(request, response){
        let obj = await commentRepository.update(request.params.id, request.body)
        response.json(obj)
    }
    async store(request, response){
        let obj = await commentRepository.insert(request.body)
        response.json(obj)
    }
}

module.exports = CommentController