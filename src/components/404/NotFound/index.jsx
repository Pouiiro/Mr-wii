import React from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import wiiro from 'assets/images/mrWii.png'

export default () => (
  <Container maxWidth="md">
    <Typography
      component="div"
      style={{
        height: '100vh',
        marginTop: '15vh'
      }}
    >
      <div className="thankYou">
        <img src={wiiro} alt="Mr Wii" />
        <h1>404 PAGE NOT FOUND</h1>
        <NavLink to="/" exact>
          <button id="input-submit">Take me home</button>
        </NavLink>
      </div>
    </Typography>
  </Container>
)
