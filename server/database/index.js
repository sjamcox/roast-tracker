require('dotenv').config()

const mongoose = require('mongoose')
const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const RoastSchema = new mongoose.Schema({
  roaster: String,
  beanOrigin: String,
  weight: String,
  ambientTemp: String,
  startTime: String,
  firstCrack: String,
  secondCrack: String,
  totalTime: String,
  notes: String,
}, { timestamps: true })

const Roast = mongoose.model('Roast', RoastSchema)

const getAllRoasts = async () => {
  try {
    return await Roast.find({})
  } catch(err) {
    console.error(err)
  }
}

const addRoast = async (data) => {
  try {
   return await Roast.create(data)
  } catch(err) {
    console.error(err)
  }
}

module.exports = {
  getAllRoasts,
  addRoast
}