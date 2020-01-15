import React from 'react'
import Intro from 'components/home/intro'
import Projects from 'components/home/projects'
import Skills from 'components/home/skills'
import Container from '@material-ui/core/Container'
import './style.css'

const Home = () => {
  return (
    <Container maxWidth="xl" className="wholeCont">
      <Intro />
      <Projects />
      <Skills />
    </Container>
  )
}

export default Home
