import React from 'react';
import './profile.css';

function Profile() {
  return(
    <div className="profileContainer">
      <div className="profileImage"><i className="far fa-user-circle fa-6x"></i></div>
      <div className="profileInfo">
        <h2 className="profileHeader">Profile Info</h2>
        <ul className="unorderedList">
          <li className="profileList">Username: </li>
          <li className="profileList">Email: </li>
        </ul>
        <button className="editButton">Edit Info</button>
      </div>
      <div className="profileTrips">
        <h2 className="profileHeader">Current Trips</h2>
      </div>
    </div>
  )
}

export default Profile;
