import React from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import wiiro from 'assets/images/mrWii.webp'
import { Title, Button } from 'styles/style'
import styled from 'styled-components'

export default () => (
  <Container maxWidth="md">
    <Typography
      component="div"
      style={{
        height: '100vh'
      }}
    >
      <Div>
        <img src={wiiro} alt="Mr Wii" />
        <Tituru>404 PAGE NOT FOUND</Tituru>
        <NavLink to="/" exact>
          <TyButton id="input-submit">Take me home</TyButton>
        </NavLink>
      </Div>
    </Typography>
  </Container>
)

const Tituru = styled(Title)`
  margin-top: 0;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 18px;
    margin-top: 0;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 20px;
    margin-top: 0;
  }
`

const TyButton = styled(Button)`
  width: 40%;
  margin-left: 0;
  margin-bottom: 0;
  margin-top: 2rem;
  background-color: #31d8bc;
  border: 2px solid #31d8bc;
  &:hover {
    color: #31d8bc;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 60%;
    margin-left: 0;

    font-size: 12px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 60%;
    margin-left: 0;

    font-size: 14px;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 45%;
    margin-left: 0;
    font-size: 16px;
  }
`

const Div = styled.div`
  text-align: center;
  img {
    margin-top: 15vh;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    img {
      width: 100%;
      margin-top: 16vh;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    img {
      width: 100%;
      margin-top: 20vh;
    }
  }
`
