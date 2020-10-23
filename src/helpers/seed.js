// Import external dependancies
const faker = require('faker')
const boom = require('@hapi/boom')

// Number of data to generate
const numberOfOwners = 50
const numberOfCars = 1000
const numberOfServices = 5000

// Import internal dependancies
const fastify = require('../server.js')

// Fake data
const cars = [
	{
		name: 'Tesla',
		models: ['S', 'E', 'X', 'Y']
	},
	{
		name: 'Mercedes',
		models: ['GLA', 'GLC', 'GLE', 'GLS']
	},
	{
		name: 'BMW',
		models: ['X4', 'Z3', 'M2', '7']
	},
	{
		name: 'Audi',
		models: ['A1', 'A3', 'A4', 'A5']
	},
	{
		name: 'Honda',
		models: ['Civic', 'NSX', 'Jazz', 'CR-V']
	},
	{
		name: 'Land Rover',
		models: ['Range Rover']
	},
	{
		name: 'Suzuki',
		models: ['Swift', 'Ignis', 'Vitara']
	},
	{
		name: 'Wolkswagen',
		models: ['Golf IV', 'Polo V', 'Arteon', 'Up!', 'Touareg', 'California 6.1']
	},
	{
		name: 'Ford',
		models: ['Fiesta', 'Focus', 'Fusion', 'Mustang']
	},
	{
		name: 'Renault',
		models: ['Mégane', 'Clio', 'Captur', 'Scénic', 'Twingo', '5', '9', 'Fregate']
	},
	{
		name: 'Citroën',
		models: ['C1', 'Saxo', '2CV', 'GS', 'Traction Avant', 'DS', 'C-Zero']
	}
]
const serviceGarages = ['A++ Auto Services', "Gary's Garage", 'Super Service', 'iGarage', 'Best Service']

// Get Data Models
const Car = require('../models/Car')
const Owner = require('../models/Owner')
const Service = require('../models/Service')

// Fake data generation functions
const generateOwnerData = () => {
	let ownerData = []
	let i = 0

	while (i < numberOfOwners) {
		const firstName = faker.fake('{{name.firstName}}')
		const lastName = faker.fake('{{name.lastName}}')
		const email = faker.fake(`${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`)
		
		const owner = {
			firstName,
			lastName,
			email
		}

		ownerData.push(owner)
		i++
	}

	return ownerData
}

const generateCarData = ownersIds => {
	let carData = []
	let i = 0

	while (i < numberOfCars) {
		const owner_id = faker.random.arrayElement(ownersIds)
		const carObject = faker.random.arrayElement(cars)
		const title = faker.random.arrayElement(carObject.models)
		const price = faker.random.number({ min: 5000, max: 30000 })
		const age = faker.random.number({ min: 2, max: 10 })

		const car = {
			owner_id,
			brand: carObject.name,
			title,
			price,
			age
		}

		carData.push(car)
		i++
	}

	return carData
}

const generateServiceData = carsIds => {
	let serviceData = []
	let i = 0

	while (i < numberOfServices) {
		const car_id = faker.random.arrayElement(carsIds)
		const name = faker.random.arrayElement(serviceGarages)
		const date = faker.fake('{{date.past}}')

		const service = {
			car_id,
			name,
			date
		}

		serviceData.push(service)
		i++
	}

	return serviceData
}

fastify.ready().then(
	async () => {
		try {
			const owners = await Owner.insertMany(generateOwnerData())
			const ownersIds = owners.map(x => x._id)

			const cars = await Car.insertMany(generateCarData(ownersIds))
			const carsIds = cars.map(x => x._id)

			const services = await Service.insertMany(generateServiceData(carsIds))

			console.log(`
      Data successfully added:
        - ${owners.length} owners added.
        - ${cars.length} cars added.
        - ${services.length} services added.
      `)
		} catch (err) {
			throw boom.boomify(err)
		}
		process.exit()
	},
	err => {
		console.log('An error occured: ', err)
		process.exit()
	}
)
