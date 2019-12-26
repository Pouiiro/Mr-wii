import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { NavLink } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import andzoa from '../../assets/ANDZOA.jpg'
import mrTodo from '../../assets/mrTodo.png'
import mrLegend from '../../assets/mrLegend.png'
import DevIcon from 'devicon-react-svg'
import { ErrorBoundary } from 'react-error-boundary'

import './style.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  root: {
    flexGrow: 1
  }
})

const devIconStyle = {
  // fill: 'thistle',
  width: 'calc(25px + (100 - 25) * ((100vw - 300px) / (1600 - 300)))',
  verticalAlign: 'middle',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const Home = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{
            height: '100vh',
            marginTop: '10vh'
          }}
        >
          <div className="divCont">
            <h1>Hello World!</h1>
            <h2>My name is Wael, aka Mr Wii.</h2>
            <p>I'm a Front-End Web Developer ↴</p>
            <NavLink to="/about" exact>
              <button id="btn1">More About Me</button>
            </NavLink>
            <NavLink to="/contact" exact>
              <button id="btn2">Get In Touch</button>
            </NavLink>
          </div>
        </Typography>
      </Container>
      />
      <Container maxWidth="lg" className="cardsCont">
        <h1>My Projects</h1>
        <Grid container spacing={2} id="cards">
          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={{
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                  component="img"
                  alt="Contemplative Reptile"
                  image={mrTodo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mr Todo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Mr Todo is a light TODO app created using reactJS, has
                    plenty of features that will make your Todos a piece of
                    cake.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/Mr-Wii/Mr-Todo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    href="https://thirsty-dubinsky-de0f0a.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try It
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                  image={andzoa}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Andzoa
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A school project while doing an internship on a company
                    named Andzoa using Html/Css/JS/PHP/MySql.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://github.com/Mr-Wii/Andoza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={{
                    width: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                  image={mrLegend}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mr Legend
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A web app i'm making (W.I.P) to rank Moroccan player base
                    for a certain game (League of Legends).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <p style={{ color: 'red' }}>
                  Still W.I.P | Source Code yet to be published, soon.
                </p>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="cardsCont">
        <h1>My Stack</h1>
        <ul>
          <li>
            <ErrorBoundary>
              <DevIcon icon="html5" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            Html5
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="css3" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            Css3
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon
                icon="javascript"
                style={devIconStyle}
                viewBox="0 0 32 32"
              />
            </ErrorBoundary>{' '}
            Javascript
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="mysql" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            Mysql
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            React
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="php" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            Php
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="nodejs" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>
            NodeJs
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon icon="jquery" style={devIconStyle} viewBox="0 0 32 32" />
            </ErrorBoundary>{' '}
            Jquery
          </li>
          <li>
            <ErrorBoundary>
              <DevIcon
                icon="mongodb"
                style={devIconStyle}
                viewBox="0 0 32 32"
              />
            </ErrorBoundary>{' '}
            MongoDb
          </li>
        </ul>
      </Container>
      <CssBaseline />
    </React.Fragment>
  )
}

export default Home
