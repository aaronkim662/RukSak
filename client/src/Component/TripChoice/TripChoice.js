import React from 'react'

// Get the name of the

function TripChoice(props) {

  return(
    <div>
      <div>
        <img src={require(this.props.tripImage)} alt=''/>
      </div>
      <div>
        <h2>{this.props.tripChoice}</h2>
      </div>
    </div>
  )
}

export default TripChoice
