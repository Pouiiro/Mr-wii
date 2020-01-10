import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, 0, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
          zIndex: '1'
        }}
      >
        <NavLinks>
          <li>
            <NavLink
              activeStyle={{
                color: '#000000',
                fontSize: '1.4rem',
                lineHeight: '2',
                fontFamily: '"Roboto" "Helvetica", "Arial", sans-serif',
                fontWeight: '600'
              }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                color: '#000000',
                fontSize: '1.4rem',
                lineHeight: '2',
                fontFamily: '"Roboto" "Helvetica", "Arial", sans-serif',
                fontWeight: '600'
              }}
              to="/contact"
              exact
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                color: '#000000',
                fontSize: '1.4rem',
                lineHeight: '2',
                fontFamily: '"Roboto" "Helvetica", "Arial", sans-serif',
                fontWeight: '600'
              }}
              to="/about"
              exact
            >
              About
            </NavLink>
          </li>
        </NavLinks>
        <Hr />
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const Hr = styled.hr`
  width: 100%;
  margin: 0 auto;
`

const CollapseWrapper = styled(animated.div)`
  background: #fff;
  position: fixed;
  top: 7.1rem;
  left: 0;
  right: 0;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 500ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #676767;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`
