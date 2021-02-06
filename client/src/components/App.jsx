import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Entry from './Entry'
import Stopwatch from './Stopwatch'
import RoastDataForm from './RoastDataForm'

const App = () => {

  const defaultState = {
    roaster: '',
    beanOrigin: '',
    weight: '',
    ambientTemp: '',
    startTime: '',
    firstCrack: null,
    secondCrack: null,
    timeElapsed: '0:00:00',
    notes: '',
  }

  const [ roastData, setRoastData ] = useState(defaultState)

  return (
    <>
      <Header />
      <Entry />
      {/* <RoastDataForm data={roastData} update={setRoastData}/>
      <Stopwatch data={roastData} update={setRoastData}/>
      <div id='timer'>
      <div>
        {!roastData.firstCrack
          ? <button name='firstCrack' onClick={(e) => handleCrack(e.target.name)}>First Crack</button>
          : <p>First Crack: {roastData.firstCrack}</p>
          }
      </div>
      <div>
        {!roastData.secondCrack
          ? <button name='secondCrack' onClick={(e) => handleCrack(e.target.name)}>Second Crack</button>
          : <p>Second Crack: {roastData.secondCrack}</p>
        }
      </div> */}
    </>
  )
}

export default App