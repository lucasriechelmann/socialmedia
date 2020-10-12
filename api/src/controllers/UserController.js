const UserRepository = require("../repositories/UserRepository")

module.exports = {
    async index(request, response){
        let objs = await UserRepository.getAll()
        response.json(objs)
    },
    async show(request, response){
        let obj = await UserRepository.get(request.params.id)
        response.json(obj)
    },
    async destroy(request, response){
        let obj = await UserRepository.delete(request.params.id)
        response.json(obj)
    },
    async update(request, response){
        let obj = await UserRepository.update(request.params.id, request.body)
        response.json(obj)
    },
    async store(request, response){
        let obj = await UserRepository.insert(request.body)
        response.json(obj)
    }
}