import React from 'react'
import Contact from 'components/contact/contact'
import { SEO } from 'components/SEO'
import CssBaseline from '@material-ui/core/CssBaseline'

export default () => {
  return (
    <React.Fragment>
      <SEO title="Contact" type="Organization" location="/contact" />
      <CssBaseline />
      <Contact />{' '}
    </React.Fragment>
  )
}
