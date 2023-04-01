const express = require('express')

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("This is starting");
})

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
})


