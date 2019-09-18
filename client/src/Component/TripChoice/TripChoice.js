import React from 'react';
import './TripChoice.css'

function TripChoice() {

  return(
    <div>
      <div className="trip-choice">
        <img
        className='photo'
        src="https://i.imgur.com/vVIAXS0.jpg" alt='Camping'/>
        <h2 className="trip-name">Camping</h2>
      </div>
      <div>
        <img
        className='photo'
        src="https://i.imgur.com/GFZQ8B4.jpg" alt='Hiking'/>
        <h2 className="trip-name">Hiking</h2>
      </div>
      <div>
        <img
        className='photo'
        src="https://i.imgur.com/qVvoGj4.jpg" alt='Biking'/>
        <h2 className="trip-name">Biking</h2>
      </div>
    </div>
  )
}

export default TripChoice
