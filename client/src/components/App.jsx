import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Entry from './Entry'
import RoastForm from './RoastForm'
import Countdown from './Countdown'
import Stopwatch from './Stopwatch'

const App = () => {

  const initialState = {
    roaster: '',
    beanOrigin: '',
    beanWeight: '',
    ambientTemp: '',
    startTime: '',
    firstCrack: null,
    secondCrack: null,
    timeElapsed: '0:00:00',
    notes: '',
  }

  const [ roastData, setRoastData ] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRoastData({
      ...roastData,
      [name]: value
    })
  }

  return (
    <>
      <Header />
      <Stopwatch data={roastData} update={setRoastData}/>
      <Entry />
      <RoastForm data={roastData} update={handleChange} />
      <Countdown />
    </>
  )
}

export default App