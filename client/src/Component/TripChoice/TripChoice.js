import React from 'react'
import './TripChoice.css'
import { Link } from 'react-router-dom'

function TripChoice(props) {
  console.log(props.selectTrip)
  return(
    <div>
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
          className='photo'
          src="https://i.imgur.com/vVIAXS0.jpg" alt='Camping'
          name="camping"
          onClick = {(e) => props.selectTrip(e)}
          />
        <h2 className="trip-name"
          >Camping</h2>
        </Link>
      </div>
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
          className='photo'
          src="https://i.imgur.com/GFZQ8B4.jpg" alt='Hiking'
          name="Hiking"
          onClick = {(e) => props.selectTrip(e)}
          />
          <h2 className="trip-name">Hiking</h2>
        </Link>
      </div>
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
          className='photo'
          src="https://i.imgur.com/qVvoGj4.jpg" alt='Biking'
          name="Biking"
          onClick = {(e) => props.selectTrip(e)}
                    />
          <h2 className="trip-name">Biking</h2>
        </Link>
      </div>
    </div>
  )
}

export default TripChoice
