import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const RoastFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  div {
    width: 100%
  }
  button {
    margin-top: 18px;
  }
`

const RoastForm = ({ data, update }) => {
  return (
    <RoastFormContainer>
      <h2>First ... <br />
        A few details
      </h2>
      <div>
        <label htmlFor='roaster'>Roaster Model</label>
        <input
          id='roaster'
          name='roaster'
          onChange={(e) => update(e)}
          type='text'
          value={data.roaster}
        />
        <label htmlFor='beanOrigin'>Bean Origin</label>
        <input
          id='beanOrigin'
          name='beanOrigin'
          onChange={(e) => update(e)}
          type='text'
          value={data.beanOrigin}
        />
        <label htmlFor='beanWeight'>Bean Weight</label>
        <input
          id='beanWeight'
          name='beanWeight'
          onChange={(e) => update(e)}
          type='text'
          value={data.beanWeight}
        />
        <label htmlFor='ambientTemp'>Ambient Temperature</label>
        <input
          id='ambientTemp'
          name='ambientTemp'
          onChange={(e) => update(e)}
          type='text'
          value={data.ambientTemp}
        />
      </div>
      <Link to='countdown'><Button>Start Roast</Button></Link>
    </RoastFormContainer>
  )
}

export default RoastForm