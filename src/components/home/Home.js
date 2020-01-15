import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Intro from 'components/home-fragments/intro'
import Projects from 'components/home-fragments/projects'
import Skills from 'components/home-fragments/skills'
import Container from '@material-ui/core/Container'
import { SEO } from 'components/SEO'

import './style.css'

const Home = () => {
  return (
    <React.Fragment>
      <SEO title="Hello world!" type="Organization" />
      <CssBaseline />
      <Container maxWidth="xl" className="wholeCont">
        <Intro />
        <Projects />
        <Skills />
      </Container>
      <CssBaseline />
    </React.Fragment>
  )
}

export default Home
