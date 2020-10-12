const { Router } = require("express")
const PostController = require("../controllers/PostController")
const LikeController = require("../controllers/LikeController")
const CommentController = require("../controllers/CommentController")
const ProfileController = require("../controllers/ProfileController")
const UserController = require("../controllers/UserController")

const controllers = [
    { route: "post", controller: PostController },
    { route: "like", controller: LikeController },
    { route: "comment", controller: CommentController },
    { route: "profile", controller: ProfileController },
    { route: "user", controller: UserController }
]

const routes = Router()

controllers.forEach(controller =>{
    routes.get(`/api/${controller.route}`, controller.controller["index"])
    routes.post(`/api/${controller.route}`, controller.controller["store"])
    routes.get(`/api/${controller.route}/:id`, controller.controller["show"])
    routes.delete(`/api/${controller.route}/:id`, controller.controller["destroy"])
    routes.put(`/api/${controller.route}/:id`, controller.controller["update"])
})

module.exports = routes