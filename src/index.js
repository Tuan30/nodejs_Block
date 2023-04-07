const express = require('express')
const path = require('path')
const port = 3000
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')

//connect to DB
db.connect()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//HTTP Logger
app.use(morgan('combined'))

//Route init
route(app)

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
    console.log(`${port}`)
})