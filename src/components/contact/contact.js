import React from 'react'
import axios from 'axios'
import './form.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: this.state
    }).then(response => {
      if (response.data.status === 'success') {
        alert('Message Sent.')
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.')
      }
    })
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
            style={{
              height: '100vh',
              marginTop: '10vh'
            }}
          >
            <div className="wrap-contact100">
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
                className="contact100-form validate-form"
              >
                <span className="contact100-form-title">Contact Us</span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Please enter your name"
                >
                  <input
                    type="text"
                    className="input100"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                  <span className="focus-input100"></span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Please enter email: e@a.x"
                >
                  <input
                    type="email"
                    className="input100"
                    name="email"
                    placeholder="Email"
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                  <span className="focus-input100"></span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Please enter your message"
                >
                  <textarea
                    className="input100"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                  <span className="focus-input100"></span>
                </div>
                <div className="container-contact100-form-btn">
                  <button type="submit" className="contact100-form-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    )
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact
