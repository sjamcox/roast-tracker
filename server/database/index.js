if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true })

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
  try {
    const created = await Roast.create(data)
    return created
  } catch(err) {
    console.error(err)
  }
}

module.exports = {
  addRoast
}