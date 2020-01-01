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
import andzoa from '../../assets//images/ANDZOA.jpg'
import mrTodo from '../../assets/images/mrTodo.png'
import mrLegend from '../../assets//images/mrLegend.png'
import htmlSvg from '../../assets/svg/html.svg'
import nodeSvg from '../../assets/svg/node.svg'
import cssSvg from '../../assets/svg/css.svg'
import jsSvg from '../../assets/svg/js.svg'
import sqlSvg from '../../assets/svg/mysql.svg'
import reactSvg from '../../assets/svg/react.svg'
import phpSvg from '../../assets/svg/php.svg'
import jquerySvg from '../../assets/svg/jquery.svg'
import mongoSvg from '../../assets/svg/mongodb.svg'

import './style.css'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  root: {
    flexGrow: 1
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="wholeCont">
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
        <Container
          maxWidth="lg"
          className="cardsCont"
          style={{ marginTop: '30vh' }}
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
              <img src={htmlSvg} alt="htmlimg" />
            </li>
            <li>
              <img src={cssSvg} alt="cssimg" />
            </li>
            <li>
              <img src={jsSvg} alt="jsimg" />
            </li>
            <li>
              <img src={sqlSvg} alt="sqlimg" />
            </li>
            <li>
              <img src={reactSvg} alt="reactimg" />
            </li>
            <li>
              <img src={phpSvg} alt="phpimg" />
            </li>
            <li>
              <img src={nodeSvg} alt="nodejsimg" />
            </li>
            <li>
              <img src={jquerySvg} alt="jqueryimg" />
            </li>
            <li>
              <img src={mongoSvg} alt="mongodbimg" />
            </li>
          </ul>
        </Container>
        <CssBaseline />
      </Container>
    </React.Fragment>
  )
}

export default Home
