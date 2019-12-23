import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

import GlobalStyle from './styles/Global'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Home />
        {/* <section id="section07" class="demo">
          <a href="#section08">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </section> */}
      </>
    )
  }
}

export default App
