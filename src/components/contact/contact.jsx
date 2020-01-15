import React from 'react'
import './style.css'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Thanks from './thanks'
import { NavLink } from 'react-router-dom'

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
        <Container>
          <Container maxWidth="md">
            <Typography
              component="div"
              style={{
                marginTop: '15vh'
              }}
            >
              <div className="thankYou">
                <h1>Contact Me</h1>

                <h2>
                  You can find me anywhere here in my
                  <NavLink style={{ textDecoration: 'none' }} to="/about" exact>
                    <h3>social media</h3>
                  </NavLink>
                </h2>

                <h2>Or you can get in touch using the form down below:</h2>
              </div>
            </Typography>
          </Container>
          <Container maxWidth="md">
            <Typography
              component="div"
              style={{
                height: '80vh'
                // marginTop: '15vh'
              }}
            >
              <div className="contactDiv">
                {/* <h1>Contact Me</h1> */}
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
        </Container>
      )
    } else {
      return <Thanks />
    }
  }
}
export default Contact
