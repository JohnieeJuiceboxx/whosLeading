import React, {Component} from 'react'

export default class sideBar extends Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      home: true,
      teams: false,
      calendar: false,
      about: false
    }
  }
  selector = tab => {
    if (tab === 'teams') {
      this.setState({
        teams: true,
        calendar: false,
        about: false,
        home: false
      })
    } else if (tab === 'calendar') {
      this.setState({
        calendar: true,
        about: false,
        home: false,
        teams: false
      })
    } else if (tab === 'home') {
      this.setState({
        home: true,
        teams: false,
        calendar: false,
        about: false
      })
    } else if (tab === 'about') {
      this.setState({
        about: true,
        home: false,
        teams: false,
        calendar: false
      })
    }
  }
  render() {
    const {selected, home, teams, calendar, about} = this.state
    return (
      <div className="sidebar">
        <ul>
          <li
            className={home ? 'unmorphic' : null}
            onClick={() => this.selector('home')}
          >
            HOME
          </li>
          <li
            className={teams ? 'unmorphic' : null}
            onClick={() => this.selector('teams')}
          >
            TEAMS
          </li>
          <li
            className={calendar ? 'unmorphic' : null}
            onClick={() => this.selector('calendar')}
          >
            CALENDAR
          </li>
          <li
            className={about ? 'unmorphic' : null}
            onClick={() => this.selector('about')}
          >
            ABOUT
          </li>
        </ul>
      </div>
    )
  }
}
