import React from 'react';
import './profile.css';

function Profile(props) {
  return(
    <div className="profileContainer">
      <div className="profileImage"><i className="far fa-user-circle fa-6x"></i></div>
      <div className="profileInfo">
        <ul className="unorderedList">
          <li className="profileList">Username: {props.currentUser.username}</li>
          <li className="profileList">Email: {props.currentUser.email}</li>
        </ul>
      </div>
      <div className="profileTrips">
        <h2 className="profileHeader">Current Trips</h2>
        <div>here</div>
        {props.allTripsSelected && props.allTripsSelected.map((ele) => {
          return (
            <div>{ele.trip}</div>
          )
        })}
        <button onClick={() => props.removeTrip(props.tripId.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Profile;
