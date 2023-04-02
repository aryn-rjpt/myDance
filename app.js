const express = require('express')
const path = require('path')

const app = express()
const port = 80

app.set('views', path.join(__dirname, 'views'))
app.set('view-engine', 'pug')
app.use('/static', express.static('static'))
app.use(express.urlencoded())



app.get("/", (req, res) => {
    res.status(200).render('home.pug');
})

app.listen(port, ()=>{
    console.log(`Server running @ http://localhost:${port}`)
})


