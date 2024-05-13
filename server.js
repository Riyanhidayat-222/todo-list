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

app.get('/todo', (req, res) => {
    Todos.find({}).then((items) => {
        res.json({
            data: items,
            message: 'Sukses Memdapatkan Semua Data',
        })
    })
})

app.get('/todo/:id', (req, res) => {
    // TODO: implement it :)
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

app.put('/todo/:id', (req, res) => {
    // TODO: implement it :)
})

app.delete('/todo/:id', (req, res) => {
    // TODO: implement it :)
})

app.listen(3001, () => {
    console.log(`Server started @ http://localhost:3001`)
})