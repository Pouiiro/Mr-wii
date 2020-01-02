import React from 'react'
import './style.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Redirect } from 'react-router-dom'
import Thanks from './thanks'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '', done: false }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => {
        this.setState({
          done: true
        })
        console.log(this.state)
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const { name, email, message } = this.state
    if (this.state.done === false) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Typography
              component="div"
              style={{
                height: '100vh',
                marginTop: '15vh'
              }}
            >
              <div className="contactDiv">
                <h1>Contact Me</h1>
                <form
                  className="cf"
                  id="contact-form"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="half left cf">
                    <input
                      type="text"
                      id="input-name"
                      placeholder="Full Name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      type="email"
                      id="input-email"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    type="text"
                    id="input-message"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={this.handleChange}
                  ></textarea>

                  <input type="submit" value="Send" id="input-submit" />
                </form>
              </div>
            </Typography>
          </Container>
        </React.Fragment>
      )
    } else {
      return <Thanks />
    }
  }
}
export default Contact
