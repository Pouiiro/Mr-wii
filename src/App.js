import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Ftr from './components/footer/footer'

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
      <Router>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Ftr />
        <GlobalStyle />
      </Router>
    )
  }
}

export default App
