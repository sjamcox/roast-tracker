import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import Entry from './Entry'
import RoastForm from './RoastForm'
import Countdown from './Countdown'
import RoastTimer from './RoastTimer'
import RoastNotes from './RoastNotes'
import RoastHistory from './RoastNotes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

  const initialState = {
    roaster: '',
    beanOrigin: '',
    beanWeight: '',
    ambientTemp: '',
    startTime: '',
    firstCrack: null,
    secondCrack: null,
    timeElapsed: 0,
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
    <Router>
      <Redirect to='/'/>
      <Layout>
        <Switch>
          <Route path='/form'>
            <RoastForm data={roastData} update={handleChange} />
          </Route>
          <Route path='/countdown'>
            <Countdown />
          </Route>
          <Route path='/roast'>
            <RoastTimer data={roastData} update={setRoastData}/>
          </Route>
          <Route path='/notes'>
            <RoastNotes data={roastData} update={setRoastData} />
          </Route>
          <Route path='/history'>
            <RoastHistory />
          </Route>
          <Route path='/'>
            <Entry />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App