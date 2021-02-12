import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useHistory } from 'react-router-dom'

const RoastTimerContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 400;
    font-size: 10rem;
    margin-top: 75px;
  }
  p {
    height: 18px;
    margin-bottom: 16px;
    padding: 16px 0;
  }
  span {
    font-weight: 700;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
  }
`

const RoastTimer = ({ data, update }) => {

  const initialState = {
    startTime: '',
    firstCrack: null,
    secondCrack: null,
  }

  const [ progress, setProgress ] = useState(initialState)
  const [ isRunning, setIsRunning ] = useState(false)
  const [ timeElapsed, setTimeElapsed ] = useState(0)

  const start = () => {
    setProgress({
      ...progress,
      startTime: Date.now()
    })
    setIsRunning(true)
  }

  let history = useHistory()

  const stop = () => {
    setIsRunning(false);
    update({
      ...data,
      ...progress,
      timeElapsed: formatTime(timeElapsed)
    })
    history.push('/notes')
  }

  const formatTime = (mil) => {
    let seconds = Math.floor(mil / 1000) % 60
    let minutes = Math.floor(mil / 60000)
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  const updateProgress = (e) => {
    const { name } = e.target
    setProgress({
      ...progress,
      [name]: formatTime(Date.now() - progress.startTime)
    })
  }

  useEffect(() => {
    start();
  }, [])

  useEffect(() => {
    const update = setTimeout(() => {
      if (isRunning) {
        setTimeElapsed(Date.now() - progress.startTime)
      }
    }, 30)
    return () => clearTimeout(update)
  }, [isRunning, timeElapsed])

  return (
    <RoastTimerContainer>
      <h2>{ formatTime(timeElapsed) }</h2>
      {!progress.firstCrack &&
        <>
          <Button
            name='firstCrack'
            onClick={updateProgress}
          >First Crack</Button>
          <Button secondary>&nbsp;</Button>
        </>
      }
      {progress.firstCrack && !progress.secondCrack &&
        <>
          <p>First Crack: { progress.firstCrack }</p>
          <Button
            name='secondCrack'
            onClick={updateProgress}
          >Second Crack</Button>
        </>
      }
      {progress.secondCrack &&
        <>
          <p>First Crack: { progress.firstCrack }</p>
          <p>Second Crack: { progress.secondCrack }</p>
        </>
      }
      <div>
        <Button onClick={() => stop()}>End and Save</Button>
        <Button secondary onClick={() => {}}>Abort</Button>
      </div>
    </RoastTimerContainer>
  )
}

export default RoastTimer