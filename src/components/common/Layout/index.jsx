import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Ftr from 'components/common/footer/footer'
import GlobalStyle from 'styles/Global'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
      <GlobalStyle />
      <Ftr />
    </React.Fragment>
  )
}
