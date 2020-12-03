import React, { useState } from 'react'
import Stopwatch from './Stopwatch'

const Timer = () => {

  const [ milestones, setMilestones ] = useState({
    startTime: null,
    endTime: null,
    timeElapsed: null,
    finalElapsed: null,
    firstCrack: null,
    secondCrack: null,
  })

  const handleCrack = (name) => {
    setMilestones({
      ...milestones,
      [name]: milestones.timeElapsed
    })
  }

  return (
    <div id='timer'>
      <Stopwatch log={{milestones, setMilestones}}/>
      <div>
        {!milestones.firstCrack
          ? <button name='firstCrack' onClick={(e) => handleCrack(e.target.name)}>First Crack</button>
          : <p>First Crack: {milestones.firstCrack}</p>
          }
      </div>
      <div>
        {!milestones.secondCrack
          ? <button name='secondCrack' onClick={(e) => handleCrack(e.target.name)}>Second Crack</button>
          : <p>Second Crack: {milestones.secondCrack}</p>
        }
      </div>
    </div>
  )
}

export default Timer