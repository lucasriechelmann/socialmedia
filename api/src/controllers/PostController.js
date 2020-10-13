const PostRepository = require("../repositories/PostRepository")
const postRepository = new PostRepository()

class PostController{
    async index(request, response){
        let objs = await postRepository.getAll()
        response.json(objs)
    }
    async show(request, response){
        let obj = await postRepository.get(request.params.id)
        response.json(obj)
    }
    async destroy(request, response){
        let obj = await postRepository.delete(request.params.id)
        response.json(obj)
    }
    async update(request, response){
        let obj = await postRepository.update(request.params.id, request.body)
        response.json(obj)
    }
    async store(request, response){
        let obj = await postRepository.insert(request.body)
        response.json(obj)
    }
}

module.exports = PostController