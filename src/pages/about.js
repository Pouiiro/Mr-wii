import React from 'react'
import About from 'components/about/about'
import { SEO } from 'components/SEO'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

export default () => {
  return (
    <Container maxWidth="lg">
      <SEO title="About" type="Organization" location="/about" />
      <CssBaseline />
      <About />
    </Container>
  )
}
