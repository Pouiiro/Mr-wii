import React, { Component } from 'react'
import Navbar from 'components/navbar/Navbar'
import Home from 'pages/home'
import About from 'pages/about'
import Contact from 'pages/contact'
import NotFoundPage from 'pages/404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Ftr from 'components/footer/footer'
import ScrollToTop from 'react-router-scroll-top'

import GlobalStyle from 'styles/Global'

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
        <ScrollToTop>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Ftr />
          <GlobalStyle />
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
