import React from 'react'
import { NavLink } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import wiiro from 'assets/images/mrWii.png'
import { SEO } from 'components/SEO'

export default () => (
  <React.Fragment>
    <SEO
      location="/404"
      type="Organization"
      title="404"
      description="404 page not found"
    />
    <CssBaseline />
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
  </React.Fragment>
)
