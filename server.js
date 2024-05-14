const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const Todos = require('./models/todos')

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/learn-api', {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,*/
})

// HTTP Methods
// GET
// POST
// PATH
// PUT
// DELATE

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) =>{
    response.end('Hello rayyeayyen!')
})

/*app.get('/todo/:id', (req, res) => {
    // TODO: implement it :)
})*/

app.post('/todo', (req, res) => {
    const name = req.params.name
    const task = req.body.task
    const todo = new Todos({ name: task });

    todo.save().then(() => {
        res.json({
            message: 'Data Berhasil Di Simpan',
        })
    })
})

/*app.put('/todo/:id', (req, res) => {
    // TODO: implement it :)
})

app.delete('/todo/:id', (req, res) => {
    // TODO: implement it :)
})*/

app.use('/api', require('./routes/api'))

app.listen(3001, () => {
    console.log(`Server started @ http://localhost:3001`)
})