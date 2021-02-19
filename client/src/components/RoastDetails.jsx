import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RoastDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: row;
  }
  div > p {
    font-size: 20px;
    margin-right: 16px;
  }
`

const RoastDetails = () => {

  const [ details, setDetails ] = useState(null)
  const date = '11/11/11'
  const time = '11:30 AM'

  const fetchRoastDetails = async (id) => {
    const { data } = await axios.get(`/roasts/${id}`)
    setDetails(data)
  }

  useEffect(() => {
    const id = window.location.pathname.split('/')[2]
    fetchRoastDetails(id)
  }, [])

  return (

    <RoastDetailsContainer>
      {details &&
        <>
          <h2>{ details.beanOrigin }</h2>
          <div>
            <p>{ date }</p>
            <p>{ time }</p>
          </div>
          <p>Roaster: {details.roaster}</p>
          <p>Weight: {details.beanWeight}</p>
          <p>Ambient Temp: {details.ambientTemp}</p>
          <p>First Crack: {details.firstCrack}</p>
          <p>Second Crack: {details.secondCrack}</p>
          <p>Total Time: {details.timeElapsed}</p>
          <p>Roasting Notes: {details.notes}</p>
        </>
      }
    </RoastDetailsContainer>
  )
}

export default RoastDetails