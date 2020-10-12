const express = require("express")
const port = 3000
const app = express()
const routes = require("./config/routes")
const database = require("./config/database")

database.sync()

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log("listening port 3000"))