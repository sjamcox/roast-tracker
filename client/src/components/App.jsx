import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'
import RoastDataForm from './RoastDataForm'

const App = () => {

  const defaultState = {
    roaster: '',
    beanOrigin: '',
    weight: '',
    ambientTemp: '',
    startTime: '',
    firstCrack: '',
    secondCrack: '',
    totalTime: '',
    notes: '',
  }

  const [ roastData, setRoastData ] = useState(defaultState)

  const handleRoastUpdate = (key, value) => {
    setRoastData({ ...roastData, [key]: value})
  }

  return (
    <>
      <h1>Roast Tracker</h1>
      <Timer data={roastData} update={handleRoastUpdate}/>
      <RoastDataForm data={roastData} update={handleRoastUpdate}/>
    </>
  )
}

export default App