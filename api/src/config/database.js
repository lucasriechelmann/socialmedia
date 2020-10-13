const { Sequelize, DataTypes } = require("sequelize")
const User = require("../models/User")
const Profile = require("../models/Profile")
const Post = require("../models/Post")
const Like = require("../models/Like")
const Comment = require("../models/Comment")
const sequelize = new Sequelize("social_media","root","",{
    host: "localhost",
    port: 3306,
    dialect: "mysql"
})

let user = User(sequelize, DataTypes)
let profile = Profile(sequelize, DataTypes, user)
let post = Post(sequelize, DataTypes, user)
let comment = Comment(sequelize, DataTypes, { user, post })
let like = Like(sequelize, DataTypes, { user, post, comment})

sequelize
    .sync()
    .then((value) => console.log("synchronized"))
    .catch((error) => console.log(error))

module.exports = {
    connect(callback){        
        sequelize
            .authenticate()
            .then(() => callback())
            .catch(err => console.error("error", err))
    },
    disconnect(){
        sequelize
            .disconnect()
    },
    user,
    profile,
    post,
    like,
    comment
}