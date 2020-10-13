const { Router } = require("express")
const PostController = require("../controllers/PostController")
const LikeController = require("../controllers/LikeController")
const CommentController = require("../controllers/CommentController")
const ProfileController = require("../controllers/ProfileController")
const UserController = require("../controllers/UserController")

const controllers = [
    { route: "post", controller: new PostController() },
    { route: "like", controller: new LikeController() },
    { route: "comment", controller: new CommentController() },
    { route: "profile", controller: new ProfileController() },
    { route: "user", controller: new UserController() }
]

const routes = Router()

controllers.forEach(c =>{
    routes.get(`/api/${c.route}`, c.controller["index"])
    routes.post(`/api/${c.route}`, c.controller["store"])
    routes.get(`/api/${c.route}/:id`, c.controller["show"])
    routes.delete(`/api/${c.route}/:id`, c.controller["destroy"])
    routes.put(`/api/${c.route}/:id`, c.controller["update"])
})

module.exports = routes