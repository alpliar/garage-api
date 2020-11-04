// External Dependancies
const boom = require('@hapi/boom')

// Get Data Models
const Todo = require('../models/Todo')

// Get all owners
exports.getTodos = async () => {
	try {
		const todos = await Todo.find()
		return todos
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.addTodo = async req => {
    try 
    {
        const todoData = req.params === undefined ? req : {...req.body}
        const todo = new Todo(todoData)
        const newTodo = await todo.save()
        return newTodo
    } 
    catch (err) 
    {
        throw boom.boomify(err)
    }
}