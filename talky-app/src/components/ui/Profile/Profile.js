import React from "react"
import Avatar from "../Avatar/Avatar"
import "./css/Profile.css"

function Profile() {
  return (
    <>
      <div className="profile-avatar-container">
        <div className="profile-avatar">
          <Avatar />
        </div>
        <div>
          <p>Blue Robot</p>
          <p>Blue Robot</p>
        </div>
        <div className="profile-settings">
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>
    </>
  )
}

export default Profile
