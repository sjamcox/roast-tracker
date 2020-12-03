import React, { useState, useEffect } from 'react'

const Stopwatch = () => {

  const [ startTime, setStartTime ] = useState(0);
  const [ elapsed, setElapsed ] = useState(`0:00:00`);
  const [ isRunning, setIsRunning ] = useState(false)

  const start = () => {
    setStartTime(Date.now())
    setIsRunning(true)
  }

  const stop = () => {
    setIsRunning(false)
  }

  const formatTime = (mil) => {
    let decimal = Math.floor(mil / 10) % 100
    let seconds = Math.floor(mil / 1000) % 60
    let minutes = Math.floor(mil / 60000)
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}:${decimal}`
  }

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        setElapsed(formatTime(Date.now() - startTime))
      }, 30)
    }
  }, [isRunning, elapsed])

  return (
    <div className='stopwatch'>
      <h3>{elapsed}</h3>
      {!isRunning
        ? <button onClick={() => start()}>Start</button>
        : <button onClick={() => stop()}>Stop</button>
      }
    </div>
  )
}

export default Stopwatch