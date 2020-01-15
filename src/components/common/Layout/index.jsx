import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Ftr from 'components/common/footer/footer'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
      <Ftr />
    </React.Fragment>
  )
}
