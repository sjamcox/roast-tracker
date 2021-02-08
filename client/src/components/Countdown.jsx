import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CountdownContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100%;
  h2 {
    margin: 0;
  }
  p {
    color: #999999;
    font-size: 200px;
    font-weight: 700;
    margin: -60px;
  }
`

const Countdown = () => {

  let [ number, setNumber ] = useState(3)

  useEffect(() => {
    const decrement = setTimeout(() => {
      if (number > 1) {
        setNumber(number - 1)
      } else {
        setNumber('GO')
      }
    }, 1300)

    return () => clearTimeout(decrement)
  }, [number])

  return (
    <CountdownContainer>
      <h2>Get ready</h2>
      <p>{ number }</p>
    </CountdownContainer>
  )
}

export default Countdown;