import React from "react"
import Avatar from "../Avatar/Avatar"
import "./css/Profile.css"

function Profile() {
  return (
    <>
      <div className="profile-avatar-container">
        <div className="profile-avatar-background">
          <div className="profile-avatar">
            <Avatar height={"50px"} width={"50px"} />
          </div>
          <div>
            <p className="profile-avatar-name">Blue Robot</p>
            {/* <p>Blue Robot</p> */}
          </div>
        </div>
        <div className="profile-settings">
          <i class="fa-solid fa-gear profile-avatar-gear"></i>
        </div>
      </div>
    </>
  )
}

export default Profile
