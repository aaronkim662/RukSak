import React from 'react'

// Give the props to the image and the h2

function TripChoice(props) {

  return(
    <div>
      <div>
        <img src={props.tripImage} alt=''/>
      </div>
      <div>
        <h2>{props.tripChoice}</h2>
      </div>
    </div>
  )
}

export default TripChoice
