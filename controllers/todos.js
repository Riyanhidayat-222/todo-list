const Todos = require('../models/todos')

module.exports.getAllTodos = (req, res) => {
    Todos.find({}).then((todos) => {
        /*if (err) {
            res.json({
                message: 'Error',
            })
        }*/

        res.json({
            data: todos,
            message: 'Sukses Memdapatkan Semua Data',
        })
    })
}

module.exports.getTodoById = (req, res) => {
    const id = req.params.id
    Todos.findbByid(id, (err, todo) => {
        if (err) {
            res.json({
                message: 'Error while getting todo',
                error: err,
            })
        }

        res.json({
            data: todo,
            message: 'Success get todo'
        })
    })
}

module.exports.addTodo = (req, res) => {
    const task = req.body.task
    const done = req.body.done
    const todo = new Todos({name: task, done: done})

    todo.save().then(() => {
        res.json({
            message: "Data saved."
        })
    })
}

module.exports.deleteTodoById = (req, res) => {
    const id = req.params.id

    Todos.findByIdAndDelete(id).then((el) => {
        res.json({
            message: `Data Dengan Id ${id} Telah Selesai Di Hapuss`
        })
    })
}
