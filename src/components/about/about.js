import React from 'react'
import './styles.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle'
import { InlineIcon } from '@iconify/react'
import discordIcon from '@iconify/icons-mdi/discord'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import portfol from './portfolio.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  iconSiz: {
    fontSize: 25,
    verticalAlign: 'middle',
    marginRight: '6px'
  }
}))
const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}> */}
          <div className="aboutCont">
            <h1>About Me</h1>
            <div style={{ marginLeft: '1vw' }}>
              <br />
              <h2>Hello, my Name is Ouail Bni,</h2>
              <br />
              <p>I'm 23 years old, Computer Science Graduate,</p>
              <p>
                I got my Bachelors Degree in 2018 and decided to learn web
                developement and get better, also get familiar with new
                practices in the field and stay updated with all the new things.
              </p>
              <p>
                I am a technologies enthusiast and a self-taught Front-End Web
                Developer and still learning everything the field has to offer,
                i do have some Back-End knowledge such as PHP and NodeJs.
              </p>
              <br />
              <h3>For any business related inquiries, find me using:</h3>
              <br />
              <ul>
                <li>
                  <EmailIcon className={classes.iconSiz} />
                  Ouailbni@gmail.com
                </li>
                <li>
                  <PhoneIcon className={classes.iconSiz} />
                  +212 6 39 03 23 34
                </li>
                <li>
                  <PersonPinCircleIcon className={classes.iconSiz} />
                  Nr 02 Lot El Waha, 52000 | Errachidia, Morocco
                </li>
              </ul>
              <br />
              <h3>Or on the Web:</h3>
              <br />
              <ul>
                <li>
                  <a href="https://www.facebook.com/Waeruu">
                    <FacebookIcon className={classes.iconSiz} />
                    facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BniWael">
                    <TwitterIcon className={classes.iconSiz} />
                    twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/wael_bni/">
                    <InstagramIcon className={classes.iconSiz} />
                    instagram
                  </a>
                </li>
                <li>
                  <InlineIcon
                    icon={discordIcon}
                    style={{
                      fontSize:
                        'calc(25px + (30 - 25) * ((100vw - 300px) / (1600 - 300)))',
                      verticalAlign: 'middle',
                      marginRight: '6px'
                    }}
                  />
                  Wael#4667
                </li>
                <li>
                  <a href="https://github.com/Mr-Wii">
                    <GitHubIcon className={classes.iconSiz} />
                    github
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ouailbni/">
                    <LinkedInIcon className={classes.iconSiz} />
                    linkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/eruKenkyushitsu">
                    <YouTubeIcon className={classes.iconSiz} />
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}> */}
          <img className="portF" src={portfol} alt="PortfolioPic"></img>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default About
