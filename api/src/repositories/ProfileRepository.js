const database = require("../config/database")

class ProfileRepository{
    async getAll(obj){
        return await database.profile.findAll()      
    }
    async get(id){
        return await database.profile.findByPk(id)
    }
    async update(id, obj){
        let { firstName, surName } = obj

        let pro = await database.profile.findByPk(id)
        pro.firstName = firstName
        pro.surName = surName
        await pro.save()
        return pro
    }
    async delete(id){
        let pro = await database.profile.findByPk(id)
        await pro.destroy()
        return pro
    }
    async insert(obj){
        let { firstName, surName, userId } = obj
        let pro = await database.profile.create({ firstName, surName, userId })
        return pro
    }
}

module.exports = ProfileRepository