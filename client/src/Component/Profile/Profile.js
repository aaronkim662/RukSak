import React from 'react';
import './profile.css';

function Profile() {
  return(
    <div className="profileContainer">
      <div className="profileImage"><i className="far fa-user-circle fa-10x"></i></div>
      <div className="profileInfo">
        <ul>
          <li className="profileList">Name: </li>
          <li className="profileList">Username: </li>
          <li className="profileList">Email: </li>
        </ul>
        <button className="editButton">Edit Info <i class="far fa-edit"></i></button>
      </div>
      <div className="profileEdit">yoooo</div>
    </div>
  )
}

export default Profile;
