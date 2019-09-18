import React from 'react';
import './TripChoice.css'

// Give the props to the image and the h2

function TripChoice() {

  return(
    <div className="trip-choice">
      <div>
      <img
      className='camping-photo'
      src="https://i.imgur.com/vVIAXS0.jpg" alt='Camping'/>
      </div>
      <div>
        <h2>Camping</h2>
      </div>
      <div>
      <img
      className='hiking-photo'
      src="https://i.imgur.com/GFZQ8B4.jpg" alt='Camping'/>
      </div>
      <div>
        <h2>Hiking</h2>
      </div><div>
      <img
      className='biking-photo'
      src="https://i.imgur.com/qVvoGj4.jpg" alt='Camping'/>
      </div>
      <div>
        <h2>Biking</h2>
      </div>
    </div>
  )
}

export default TripChoice
