import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RoastNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  div {
    width: 100%
  }
  textarea {
    margin-bottom: 36px;
  }
`

const RoastNotes = ({ data, update }) => {

  const [ notes, setNotes ] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/roasts', {
        ...data,
        notes
      })
      update()
    } catch (err) {
      console.error(err)
    }
  }

  const handleSkip = async () => {
    try {
      const response = await axios.post('/roasts', data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <RoastNotesContainer>
      <h2>Roasting notes
      </h2>
      <div>
        <textarea
          name='roastNotes'
          placeholder='Remember what happened ...'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <Link to='/'><Button onClick={() => handleSubmit()}>Save Notes</Button></Link>
      <Link to='/'><Button onClick={() => handleSkip()} secondary>Skip</Button></Link>
    </RoastNotesContainer>
  )
}

export default RoastNotes