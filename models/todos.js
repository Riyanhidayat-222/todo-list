const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: String,
    done: {
        type: Boolean,
        default: false, 
    },
})

const Todos = mongoose.model('todo', todoSchema)

module.exports = Todos