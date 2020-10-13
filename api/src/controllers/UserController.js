const UserRepository = require("../repositories/UserRepository")
const userRepository = new UserRepository()

class UserController{
    async index(request, response){
        let objs = await userRepository.getAll()
        response.json(objs)
    }
    async show(request, response){
        let obj = await userRepository.get(request.params.id)
        response.json(obj)
    }
    async destroy(request, response){
        let obj = await userRepository.delete(request.params.id)
        response.json(obj)
    }
    async update(request, response){
        let obj = await userRepository.update(request.params.id, request.body)
        response.json(obj)
    }
    async store(request, response){
        let obj = await userRepository.insert(request.body)
        response.json(obj)
    }
}

module.exports = UserController