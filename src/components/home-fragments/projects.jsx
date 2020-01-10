import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import andzoa from 'assets/images/ANDZOA.webp'
import mrTodo from 'assets/images/mrTodo.webp'
import mrLegend from 'assets/images/mrLegend.webp'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
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
        marginTop: '30vh'
      }}
    >
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Mr Todo is a light TODO app created using reactJS, has plenty
                  of features that will make your Todos a piece of cake.
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
                <Typography variant="body2" color="textSecondary" component="p">
                  A school project while doing an internship on a company named
                  Andzoa using Html/Css/JS/PHP/MySql.
                </Typography>
              </CardContent>
            </CardActionArea>
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
                <Typography variant="body2" color="textSecondary" component="p">
                  A web app i'm making (W.I.P) to rank Moroccan player base for
                  a certain game (League of Legends).
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
  )
}

export default Projects
