const ProfileRepository = require("../repositories/PostRepository")
const profileRepository = new ProfileRepository()

class ProfileController{
    async index(request, response){
        let objs = await profileRepository.getAll()
        response.json(objs)
    }
    async show(request, response){
        let obj = await profileRepository.get(request.params.id)
        response.json(obj)
    }
    async destroy(request, response){
        let obj = await profileRepository.delete(request.params.id)
        response.json(obj)
    }
    async update(request, response){
        let obj = await profileRepository.update(request.params.id, request.body)
        response.json(obj)
    }
    async store(request, response){
        let obj = await profileRepository.insert(request.body)
        response.json(obj)
    }
}

module.exports = ProfileController