import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const RoastFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  width: auto;
  div {
    width: 100%
  }
  button {
    margin-top: 36px;
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
        <label htmlFor='roaster'>Bean Origin</label>
        <input
          id='beanOrigin'
          name='beanOrigin'
          onChange={(e) => update(e)}
          type='text'
          value={data.beanOrigin}
        />
        <label htmlFor='roaster'>Bean Weight</label>
        <input
          id='beanWeight'
          name='beanWeight'
          onChange={(e) => update(e)}
          type='text'
          value={data.beanWeight}
        />
        <label htmlFor='roaster'>Ambient Temperature</label>
        <input
          id='ambientTemp'
          name='ambientTemp'
          onChange={(e) => update(e)}
          type='text'
          value={data.ambientTemp}
        />
      </div>
      <Button>Start Roast</Button>
    </RoastFormContainer>
  )
}

export default RoastForm