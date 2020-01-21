import React from 'react'
import styled from 'styled-components'

const Burgermenu = props => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

export default Burgermenu

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.2rem;
  cursor: pointer;
  display: block;

  & span {
    background: #000000;
    display: block;
    position: relative;
    width: 3.6rem;
    height: 0.3rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -10px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }
`
