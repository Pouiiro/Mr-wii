import React from 'react'
import './style.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Thanks = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            height: '100vh',
            marginTop: '15vh'
          }}
        >
          <h1>Thank You!</h1>
          <h2>Will get back at you as soon as possible :)</h2>
        </Typography>
      </Container>
    </React.Fragment>
  )
}
export default Thanks
