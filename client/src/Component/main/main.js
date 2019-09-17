import React from 'react'
import TripChoice from '../TripChoice/TripChoice'

class Main extends React.Component {
  state = {
    name: 'camping',
    image: ''
  }
  render() {
    return (
      <div>
        <div>This is the home page</div>
        <TripChoice
        tripChoice={this.state.name}
        tripImage={this.state.image}
        />
      </div>
    )
  }
}

export default Main
