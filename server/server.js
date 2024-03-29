const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./routers")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors())
app.use("/", router)
app.listen(3000, () => console.log("server online"))
