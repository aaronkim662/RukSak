import React from 'react'
import axios from 'axios'
import './main.css'

import TripChoice from '../TripChoice/TripChoice'
import Profile from '../Profile/Profile'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: []
    }
  }

  render() {
    console.log('main', this.props.selectTrip)
    return (
      <div className="main-background">
        <div className="main">
          {
            this.props.currentUser && (
            <Profile
              currentUser={this.props.currentUser}
            />
          )}
          <TripChoice
            selectTrip={(e) => this.props.selectTrip(e)}
            />
        </div>
      </div>
    )
  }
}

export default Main
