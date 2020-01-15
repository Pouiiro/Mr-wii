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
import Grid from '@material-ui/core/Grid'
import portfol from 'assets/images/portfolio.webp'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '10vh'
  },
  iconSiz: {
    fontSize: 25,
    verticalAlign: 'middle',
    marginRight: '6px'
  },
  iconSiz1: {
    fontSize: 40,
    verticalAlign: 'middle',
    marginRight: '6px'
  }
}))
const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div className="aboutCont">
            <h1>About Me</h1>
            <div>
              <br />
              <h2>Hello, my Name is Ouail Bni,</h2>
              <br />
              <p>I'm 23 years old, Computer Science Graduate,</p>
              <p>
                I got my Bachelors Degree in 2018 and decided to learn web
                developement and get better, also get familiar with new
                practices in the field and stay updated with all the new things.
              </p>
              <br />
              <p>
                I am a technologies enthusiast and a self-taught Front-End Web
                Developer and still learning everything the field has to offer,
                i do have some Back-End knowledge such as PHP and NodeJs.
              </p>
              <br />
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
              <br />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img className="portF" src={portfol} alt="PortfolioPic"></img>
          <h2 id="commentPic">Taken in Oujda 2017 by Me, More in my IG.</h2>
        </Grid>
        <Grid item xs={12}>
          <div className="aboutCont" id="aboutC1">
            <h3>Get in touch using the web :</h3>
            <br />
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Waeruu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className={classes.iconSiz1} />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/BniWael"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className={classes.iconSiz1} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wael_bni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className={classes.iconSiz1} />
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wii.mr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className={classes.iconSiz1} />
                  Mr Wii
                </a>
              </li>
              <li>
                <InlineIcon
                  icon={discordIcon}
                  style={{
                    fontSize:
                      'calc(33px + (40 - 33) * ((100vw - 300px) / (1600 - 300)))',
                    verticalAlign: 'middle',
                    marginRight: '6px'
                  }}
                />
                <span>Wael#4667</span>
              </li>
              <li>
                <a
                  href="https://github.com/Mr-Wii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className={classes.iconSiz1} />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ouailbni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className={classes.iconSiz1} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/eruKenkyushitsu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className={classes.iconSiz1} />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
