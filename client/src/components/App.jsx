import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'
import RoastDataForm from './RoastDataForm'

const App = () => {

  return (
    <>
      <h1>Roast Tracker</h1>
      <Timer />
      <RoastDataForm />
    </>
  )
}

export default App