import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 60px;
  justify-content: center;
  position: sticky;
  top: 0px;
  width: 100%;
  h1 {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'><h1>Roast Tracker</h1></Link>
    </StyledHeader>
  )
};

export default Header;