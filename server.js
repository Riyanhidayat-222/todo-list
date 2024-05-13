const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Todos = require('./models/todos')

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/learn-api', {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,*/
})

app.get('/', (request, response) => {
    response.end('Hello world!')
})

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

app.get('/todo', (req, res) => {
    Todos.find({}).then((items) => {
        res.json({
            data: items,
            message: 'Sukses Memdapatkan Semua Data',
        })
    })
})

app.listen(3001, () => {
    console.log(`Server started @ http://localhost:3001`)
})