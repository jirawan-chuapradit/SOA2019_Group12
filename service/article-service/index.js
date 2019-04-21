const express = require("express")
const app = express()
const port = 8000
const bodyParser = require("body-parser")

const articleController = require('./controller/articleController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/articles", articleController)

const server = app.listen(port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at http://${host}:${port}/`)
})

module.exports = app 