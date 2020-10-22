// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const carSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: String,
  age: Number,
  services: {
    type: Map,
    of: String
  },
  owner_id: ObjectId
})

module.exports = mongoose.model('Car', carSchema)
