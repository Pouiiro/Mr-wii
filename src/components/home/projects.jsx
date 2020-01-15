/* eslint-disable no-useless-computed-key */
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import andzoa from 'assets/images/andzoa.webp'
import mrTodo from 'assets/images/mrTodo.webp'
import mrLegend from 'assets/images/mrLegend.webp'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import img1 from 'assets/images/shape3.webp'
import styled from 'styled-components'
import wiiro from 'assets/images/mrWii.webp'

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    height: '410px',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '9px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#9858e9',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(231,176,255,1)'
    },
    ['@media (max-width:600px)']: {
      height: '300px',
      width: '250px'
    },
    ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
      height: '310px'
    }
  },
  root: {
    flexGrow: 1
  }
})

const Projects = () => {
  const classes = useStyles()
  return (
    <Container
      maxWidth="lg"
      className="cardsCont"
      style={{
        marginTop: '5vh'
      }}
    >
      <h1>My Projects</h1>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <Image1 src={img1} alt="background" />
        <div
          style={{
            position: 'absolute',
            margin: '0',
            left: '0',
            right: '0',
            top: '15%',
            width: '100%'
          }}
          className="cardsImg"
        >
          <Grid container spacing={2} id="cards">
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Mr Wii"
                  style={{
                    width: '70%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={wiiro}
                  title="Mr Wii"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Personal Website <br />
                    (Current)
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    <a
                      href="https://github.com/Mr-Wii/mr-wii.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open sourced here
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  component="img"
                  alt="Mr Todo"
                  image={mrTodo}
                  title="Mr Todo"
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
                <CardMedia
                  component="img"
                  alt="Andzoa"
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={andzoa}
                  title="Andzoa"
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
                    A school project i did when i was interning at a company
                    called Andzoa, stack used: Html / Css / JS / PHP / MySql.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    <a
                      href="https://github.com/Mr-Wii/Andoza"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Mr Legend"
                  style={{
                    width: '44%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={mrLegend}
                  title="Mr Legend"
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

                <CardActions>
                  <p style={{ color: 'red' }}>
                    Still W.I.P | Source Code yet to be published, soon.
                  </p>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}

const Image1 = styled.img`
  width: 60%;
  margin-left: 19%;
  margin-right: auto;

  @media (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 80%;
    margin-left: 12%;
  }
`

export default Projects
