import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from 'assets/images/shape1.png'
import img1 from 'assets/images/shape2.png'

import Grid from '@material-ui/core/Grid'

const Intro = () => {
  return (
    <div className="divCont">
      <Image src={img} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1>Hello World!</h1>
          <h2>I am Wael, aka Mr Wii</h2>
          <p>Front-end web developer</p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            marginTop: '5vh'
          }}
        >
          <div
            className="buttCont"
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '100%'
            }}
          >
            <Image1 src={img1} />
            <div
              style={{
                position: 'absolute',
                margin: '0',
                left: '0',
                right: '0',
                top: '40%',
                width: '100%'
              }}
            >
              <Grid item xs={12}>
                <NavLink to="/about" exact>
                  <button id="btn1">More About Me</button>
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                <NavLink to="/contact" exact>
                  <button id="btn2">Get In Touch</button>
                </NavLink>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
const Image1 = styled.img`
  width: 60%;
  margin-left: 10%;
  margin-right: auto;
  @media (max-width: 600px) {
    width: 60%;
    height: auto;
    margin-left: 20%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    height: auto;
    margin-left: 20%;
  }
`

const Image = styled.img`
  position: absolute;
  left: 0vw;
  top: 8vh;
  width: 17%;
  height: auto;
  z-index: 0;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    top: 12vh;
    width: 50%;
  }
  @media only screen and (max-width: 600px) and (min-width: 321px) {
    top: 10vh;
    width: 50%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    top: 10vh;
    width: 25%;
  }
`

export default Intro
