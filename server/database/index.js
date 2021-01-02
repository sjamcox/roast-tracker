if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DB_KEY, {})

const RoastSchema = new mongoose.Schema({
  roaster: String,
  beanOrigin: String,
  ambientTemp: String,
  startTime: String,
  firstCrack: String,
  secondCrack: String,
  totalTime: String,
  notes: String,
}, { timestamps: true })

const Roast = mongoose.model('Roast', RoastSchema)

const addRoast = async (data) => {
  const created = await Roast.create({
    roaster: data.roaster,
    beanOrigin: data.beanOrigin,
    ambientTemp: data.ambientTemp,
    startTime: data.startTime,
    firstCrack: data.firstCrack,
    secondCrack: data.secondCrack,
    totalTime: data.totalTime,
    notes: data.notes,
  })
  return created
}

module.exports = {
  addRoast
}