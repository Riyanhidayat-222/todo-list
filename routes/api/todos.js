const express = require('express')
const router = express.Router()
const TodosCtrl = require('../../controllers/todos')

router.get('/', TodosCtrl.getAllTodos)
router.get('/:id', TodosCtrl.getTodoById)
router.post('/', TodosCtrl.addTodo)
router.delete('/:id', TodosCtrl.deleteTodoById)
router.put('/:id', TodosCtrl.updateTodoById)

module.exports = router