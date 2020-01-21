import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from 'assets/images/shape1.webp'
import img1 from 'assets/images/shape2.webp'
import { Button, BgImg, BgImg2, Header1 } from 'styles/style'
import Grid from '@material-ui/core/Grid'

const Intro = () => {
  return (
    <Div>
      <BgImg src={img} alt="background" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Header1>Hello World!</Header1>
          <Header2>I am Wael, aka Mr Wii</Header2>
          <Header3>Front-end developer.</Header3>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            marginTop: '5vh'
          }}
        >
          <Div1>
            <BgImg2 src={img1} alt="background" />
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
                  <Button id="btn1">More About Me</Button>
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                <NavLink to="/contact" exact>
                  <SecondButton id="btn2">Get In Touch</SecondButton>
                </NavLink>
              </Grid>
            </div>
          </Div1>
        </Grid>
      </Grid>
    </Div>
  )
}

const Div1 = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-top: 30%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 40%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const Div = styled.div`
  margin-left: 5vw;
  margin-top: 23vh;
  flex-grow: 1;
`

const SecondButton = styled(Button)`
  background-color: #492e7c;
  border: 2px solid #492e7c;
  margin-left: 40%;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #492e7c;
    border-color: transparent;
    background-color: transparent;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 5%;
    margin-right: auto;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 5%;
    margin-right: auto;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin-left: 46%;
  }
`

const Header2 = styled(Header1)`
  margin-left: 9rem;
  font-size: 35px;
  line-height: 20px;
  color: #9858e9;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 15px;
    line-height: 15px;
    margin-left: 4rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 15px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 20px;
    margin-left: 5rem;
  }
`

const Header3 = styled(Header2)`
  margin-left: 17rem;
  font-size: 32px;
  line-height: 70px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 14px;
    line-height: 25px;
    margin-left: 7rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 30px;
    margin-left: 5rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
    margin-left: 7rem;
  }
`

export default Intro
