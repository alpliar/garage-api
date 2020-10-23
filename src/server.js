// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose
	.connect('mongodb://localhost/mycargarage', 
	{ 
		useUnifiedTopology: true,
		useNewUrlParser: true 
	})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = fastify
