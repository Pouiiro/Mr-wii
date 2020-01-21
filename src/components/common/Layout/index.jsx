import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Ftr from 'components/common/footer/footer'
import './fonts.css'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return (
    <Container>
      <CssBaseline />
      {children}
      <Ftr />
    </Container>
  )
}

const Container = styled.div`
  -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;
  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
