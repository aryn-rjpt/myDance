const express = require('express')

const app = express()
const port = 3005

app.get("/", (req, res) => {
    res.send("This is starting");
})

app.listen(port)


