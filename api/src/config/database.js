const { Sequelize, DataTypes } = require("sequelize")
const User = require("../models/user")
const Profile = require("../models/profile")
const Post = require("../models/post")
const Like = require("../models/like")
const Comment = require("../models/comment")
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
    sync(){
        sequelize
            .sync()
            .then((value) => console.log("synchronized"))
            .catch((error) => console.log(error))
    },
    user,
    profile,
    post,
    like,
    comment
}