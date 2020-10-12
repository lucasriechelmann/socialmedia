const database = require("../config/database")

module.exports = {
    async getAll(){
        return await database.user.findAll()      
    },
    async get(id){
        return await database.user.findByPk(id)
    },
    async update(id, obj){
        let { email, password, active } = obj

        let us = await database.user.findByPk(id)
        us.email = firstName ?? us.email
        us.password = password ?? us.password
        us.active = active ?? us.active
        await us.save()
        return us
    },
    async delete(id){
        let us = await database.user.findByPk(id)
        await us.destroy()
        return us
    },
    async insert(obj){
        let { email, password } = obj
        let confirmationGuid = ""
        let active = false
        let us = await database.user.create({ email, password, active, confirmationGuid })
        return us
    }
}