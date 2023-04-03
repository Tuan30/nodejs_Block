const express = require('express')
const path = require('path')
const port = 3000
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {

    console.log(req.body)
    res.send('');

});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})