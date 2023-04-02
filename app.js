const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view-engine', 'pug')
app.use('/static', express.static('static'))



app.get("/", (req, res) => {
    res.status(200).render('home.pug');
})


app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug')
});

app.post('/contact', (req, res)=>{
    let status = true;
    res.status(200).render('contact.pug', {'status':status})
})

app.listen(port, ()=>{
    console.log(`Server running @ http://localhost:${port}`)
})


