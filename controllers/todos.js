const Todos = require('../models/todos')
const filterProp = require('../utils/object')

module.exports.getAllTodos = (req, res) => {

    Todos.find({}).then((todos) => {    
        res.json({
            data: filterProp(todos, ['id', 'name', 'done']),
            message: !todos.length
                ? "Empty data"
                : "Data has been fetched successfully"
        })
    })
}

module.exports.getTodoById = async (req, res) => {
    const id = req.params.id;

    try {
        const todo = await Todos.findById(id);

        if (!todo) {
            return res.status(404).json({
                message: 'Todo not found',
            });
        }

        res.json({
            data: {
                id: todo.id,
                name: todo.name,
                done: todo.done
            },
            message: 'Success get todo',
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting todo',
            error: err,
        });
    }
};

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

module.exports.updateTodoById = async (req, res) => {
    const data = {
        name: req.body.task,
        done: req.body.done
    }

    Todos.findByIdAndUpdate(req.params.id, data).then((el) => {
        res.json({
            message: `Data with id ${req.params.id} has been updated.`
        })
    })
}

