import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RoastSnippet from './RoastSnippet'
import axios from 'axios'

const RoastHistoryContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`

const RoastHistory = () => {

  const initialState = [{
    roaster: '',
    beanOrigin: '',
    beanWeight: '',
    ambientTemp: '',
    startTime: '',
    firstCrack: null,
    secondCrack: null,
    timeElapsed: 0,
    notes: '',
  }]

  const [ roasts, setRoasts ] = useState(initialState)

  const fetchRoastHistory = async () => {
    const roastHistory = await axios.get('/roasts')
    setRoasts(roastHistory.data)
  }

  useEffect(() => {
    fetchRoastHistory()
  }, [])

  const history = roasts.map(roast => {
    return (
      <RoastSnippet
        beanOrigin={roast.beanOrigin}
        date={roast.startTime}
        key={roast._id}
        id={roast._id}
      />
    )
  })

  return (
    <RoastHistoryContainer>
      <h2>Roasts</h2>
      { history }
    </RoastHistoryContainer>
  )
};

export default RoastHistory