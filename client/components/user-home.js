import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {SideBar, ViewContainer, Navbar} from '../components'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <Navbar />
      <div className="userHome">
        <SideBar />
        <ViewContainer>TEST</ViewContainer>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
