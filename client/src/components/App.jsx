import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Stopwatch from './Stopwatch'

const App = () => {

  const [ milestones, setMilestones ] = useState({
    startTime: null,
    endTime: null,
    totalTime: null,
    firstCrack: null,
    secondCrack: null,
  })

  return (
    <>
      <h1>Roast Tracker</h1>
      <Stopwatch log={{milestones, setMilestones}}/>
    </>
  )
}

export default App