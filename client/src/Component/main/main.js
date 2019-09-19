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

  getActivities = async () => {

  const response = await axios.get('')
  console.log(response)
  const activity = response.data.feed.entry.map( (d,i) => {
    return {
      image: d.gsx$image.$t,
      name: d.gsx$activity.$t
    }
  })
  this.setState({
    activity
  })
}

componentDidMount() {
  this.getActivities()
}

  render() {
    console.log('main', this.props.selectTrip)
    return (
      <div className="main-background">
        <div className="main">
          <Profile />
          <TripChoice
            selectTrip={(e) => this.props.selectTrip(e)}
            />
        </div>
      </div>
    )
  }
}

export default Main
