import React from 'react'
import { NavLink } from 'react-router-dom'
const Intro = () => {
  return (
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
  )
}
export default Intro
