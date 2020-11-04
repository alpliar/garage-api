// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})

module.exports = mongoose.model('Todo', todoSchema)
