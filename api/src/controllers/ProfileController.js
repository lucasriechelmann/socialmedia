const ProfileRepository = require("../repositories/PostRepository")

module.exports = {
    async index(request, response){
        let objs = await ProfileRepository.getAll()
        response.json(objs)
    },
    async show(request, response){
        let obj = await ProfileRepository.get(request.params.id)
        response.json(obj)
    },
    async destroy(request, response){
        let obj = await ProfileRepository.delete(request.params.id)
        response.json(obj)
    },
    async update(request, response){
        let obj = await ProfileRepository.update(request.params.id, request.body)
        response.json(obj)
    },
    async store(request, response){
        let obj = await ProfileRepository.insert(request.body)
        response.json(obj)
    }
}