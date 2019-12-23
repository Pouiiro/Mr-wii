import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import About from '.././about/about'
import './style.css'

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg">
        <Typography
          component="div"
          style={{
            height: '50vh',
            marginTop: '10vh'
          }}
        >
          <div className="divCont">
            <h1>Hello World!</h1>
            <h2>My name is Wael, aka Mr Wii.</h2>
            <p>I'm a Front-End Web Developer ↴</p>
            <button>More About Me</button>
            <button>Get In Touch</button>
          </div>
        </Typography>
      </Container>
      <CssBaseline />
      <Container maxWidth="xlg">
        <Typography
          component="div"
          style={{
            height: '100%',
            marginTop: '35vh'
            // backgroundColor: '#cfe8fc'
          }}
        >
          <About id="#about" />
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default Home
