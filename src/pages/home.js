import React from 'react'
import Home from 'components/home/Home'
import CssBaseline from '@material-ui/core/CssBaseline'
import { SEO } from 'components/SEO'

export default () => {
  return (
    <React.Fragment>
      <SEO title="Hello world!" type="Organization" />
      <CssBaseline />
      <Home />
      <CssBaseline />
    </React.Fragment>
  )
}
