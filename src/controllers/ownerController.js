// External Dependancies
const boom = require('@hapi/boom')

// Get Data Models
const Owner = require('../models/Owner')
const Car = require('../models/Car')

// Get all owners
exports.getOwners = async () => {
	try {
		const owners = await Owner.find()
		return owners
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.getOwnersPage = async (page, pageSize) => {
	try {
		const skip = page * pageSize
		const owners = await Owner.find().skip(skip).limit(pageSize)
		const countOwners = await Owner.find().countDocuments()
		const hasMore = countOwners > (page+1) * pageSize

		return {
			owners: owners,
			hasMore: hasMore
		}
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single owner by ID
exports.getSingleOwner = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const owner = await Owner.findById(id)
		return owner
	} catch (err) {
		throw boom.boomify(err)
	}
}

// Get single owner's cars
exports.getOwnersCars = async req => {
	try {
		const id = req.params === undefined ? req.id : req.params.id
		const cars = await Car.find({ owner_id: id })
		return cars
	} catch (err) {
		throw boom.boomify(err)
	}
}
