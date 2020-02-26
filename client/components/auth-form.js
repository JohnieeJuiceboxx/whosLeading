import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="splash-center">
      <div className="splash-box neumorphic">
        <div className="splash-wrapper">
          <h2 className="splash-h1">Who's Leading?</h2>
          <div className="splash-round neumorphic" />
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
            <button type="submit" className="neumorphic-button neumorphic">
              Sign In
            </button>
          </div>
          <div>
            <button type="submit" className="neumorphic-button neumorphic">
              demo
            </button>
          </div>
        </div>
        <form action="/auth/google">
          <div className="splash-buttons-google">
            <button type="submit" className="button-google neumorphic">
              Login in with Google
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

    // <div>
    //   <form onSubmit={handleSubmit} name={name}>
    //     <div>
    //       <label htmlFor="email">
    //         <small>Email</small>
    //       </label>
    //       <input name="email" type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="password">
    //         <small>Password</small>
    //       </label>
    //       <input name="password" type="password" />
    //     </div>
    //     <div>
    //       <button type="submit">{displayName}</button>
    //     </div>
    //     {error && error.response && <div> {error.response.data} </div>}
    //   </form>
    //   <a href="/auth/google">{displayName} with Google</a>
    // </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
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

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
