import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const EntryContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100%
`

const InnerEntryContainer = styled.div`
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
      <InnerEntryContainer>
        <h2>Turn up the heat</h2>
        <Button>Get Started</Button>
        <Button secondary>Roast History</Button>
      </InnerEntryContainer>
    </EntryContainer>
  )
}

export default Entry;