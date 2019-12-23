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
  iconSiz: {}
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
              <h2>
                Hello, my Name is Ouail Bni aka Mr Wii you can call me Wael :)
              </h2>
              <br />
              <p>I'm 23 years old, Computer Science Graduate.</p>
              <p>
                A technologies enthusiast and a self-taught Front-End Web
                Developer and still learning everything the field has to offer,
                i do have some Back-End knowledge such as PHP and NodeJs.
              </p>
              <br />
              <h3>For any business related inquiries, find me using:</h3>
              <br />
              <ul>
                <li>
                  <EmailIcon
                    style={{
                      fontSize: 30,
                      verticalAlign: 'middle',
                      marginRight: '6px'
                    }}
                  />
                  Ouailbni@gmail.com
                </li>
                <li>
                  <PhoneIcon
                    style={{
                      fontSize: 30,
                      verticalAlign: 'middle',
                      marginRight: '6px'
                    }}
                  />
                  +212 6 39 03 23 34
                </li>
                <li>
                  <PersonPinCircleIcon
                    style={{
                      fontSize: 30,
                      verticalAlign: 'middle',
                      marginRight: '6px'
                    }}
                  />
                  Nr 02 Lot El Waha, 52000 | Errachidia, Morocco
                </li>
              </ul>
              <br />
              <h3>Or on the Web:</h3>
              <br />
              <ul>
                <li>
                  <a href="https://www.facebook.com/Waeruu">
                    <FacebookIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
                    facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BniWael">
                    <TwitterIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
                    twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/wael_bni/">
                    <InstagramIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
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
                    <GitHubIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
                    github
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ouailbni/">
                    <LinkedInIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
                    linkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/eruKenkyushitsu">
                    <YouTubeIcon
                      style={{
                        fontSize: 30,
                        verticalAlign: 'middle',
                        marginRight: '6px'
                      }}
                    />
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
