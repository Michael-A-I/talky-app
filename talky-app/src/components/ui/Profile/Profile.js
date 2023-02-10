import React, { useContext } from "react"
import DispatchContext from "../../../context/DispatchContext"
import StateContext from "../../../context/StateContext"
import Avatar from "../Avatar/Avatar"
import "./css/Profile.css"

function Profile() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const menuState = appState.menu

  const toggleMenu = () =>{
    console.log(appState.menu)
    appDispatch({ type: "menu"})

  }
  
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
        <div className="profile-settings" onClick={toggleMenu}>
          <i class="fa-solid fa-gear profile-avatar-gear"></i>
        </div>
      </div>
    </>
  )
}

export default Profile
