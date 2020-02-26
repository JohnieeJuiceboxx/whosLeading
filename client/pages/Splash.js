import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {auth} from '../store'

class Splash extends Component {
  render() {
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <div className="splash-center">
        <div className="splash-box">
          <div className="splash-wrapper">
            <h2 className="splash-h1">Who's Leading?</h2>
            <div className="splash-round" />
            <div className="splash-wrapper">
              <h6>because we never know who's leading</h6>
            </div>
            <p>
              <input className="splash-input" placeholder="Email" />
            </p>
            <p>
              <input
                type="password"
                className="splash-input"
                placeholder="Password"
              />
            </p>
          </div>

          <div className="splash-buttons">
            <div>
              <button type="submit" className="neumorphic-button">
                Sign In
              </button>
            </div>
            <div>
              <button type="submit" className="neumorphic-button">
                demo
              </button>
            </div>
          </div>
          <form action="/auth/google">
            <div className="splash-buttons-google">
              <button type="submit" className="neumorphic-button-google">
                {displayName} in with Google
              </button>
              <img
                src="/64px-Google__G__Logo.svg.png"
                className="google-G"
                id="rotate"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}
export default connect(mapLogin, mapDispatch)(Splash)
