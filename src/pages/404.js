import React from 'react'
import NotFound from 'components/404/NotFound'
import { SEO } from 'components/SEO'
import CssBaseline from '@material-ui/core/CssBaseline'

export default () => {
  return (
    <React.Fragment>
      <SEO
        location="/404"
        type="Organization"
        title="404"
        description="404 page not found"
      />
      <CssBaseline />
      <NotFound />
    </React.Fragment>
  )
}
