const express = require("express")

const app = express()

app.listen(4000, () => {
    console.log("server at http://localhost:4000")
})

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname })
})
app.get("/solutions", (req, res) => {
    res.sendFile("./views/solutions.html", { root: __dirname })
})
app.get("/community", (req, res) => {
    res.sendFile("./views/community.html", { root: __dirname })
})

//redirect
app.get("/home", (req, res) => {
    res.redirect("/")
})

app.use((req, res) => {
    res.status(404)
    res.sendFile("./views/404.html", { root: __dirname })
})