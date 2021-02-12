import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const EntryContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  h2 {
    text-align: center;
    margin: 0 0 36px 0;
  }
`

const Entry = () => {
  return (
    <EntryContainer>
      <h2>Turn up the heat</h2>
      <Link to='/form'><Button>New Roast</Button></Link>
      <Link to='/history'><Button secondary>Roast History</Button></Link>
    </EntryContainer>
  )
}

export default Entry;