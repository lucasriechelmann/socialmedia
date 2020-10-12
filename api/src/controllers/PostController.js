const PostRepository = require("../repositories/PostRepository")

module.exports = {
    async index(request, response){
        let objs = await PostRepository.getAll()
        response.json(objs)
    },
    async show(request, response){
        let obj = await PostRepository.get(request.params.id)
        response.json(obj)
    },
    async destroy(request, response){
        let obj = await PostRepository.delete(request.params.id)
        response.json(obj)
    },
    async update(request, response){
        let obj = await PostRepository.update(request.params.id, request.body)
        response.json(obj)
    },
    async store(request, response){
        let obj = await PostRepository.insert(request.body)
        response.json(obj)
    }
}