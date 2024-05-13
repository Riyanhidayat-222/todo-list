const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Todoa = require('./models/todos')

mongoose.connect('mongodb://localhost:27017/learn-api', {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,*/
})

app.get('/', (request, response) => {
    response.end('Hello world!')
})

// todo/4

app.get('/todo/:name', (req, res) => {
    const name = req.params.name


    const todo = new Todos({ name });
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