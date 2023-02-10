import React, { useContext } from "react"
import { Nav } from "react-bootstrap"
import { withRouter } from "react-router"

import "../Sidebar/css/Sidebar.css"
import SidebarProfile from "./SidebarProfile"
import Container from "react-bootstrap/Container"
import SidebarItems from "./SidebarItems"

import DispatchContext from "../../../context/DispatchContext"
import StateContext from "../../../context/StateContext"
import Input from "../../ui/Input/Inputs"
import Logo from "../Logo"
import Profile from "../../ui/Profile/Profile"
import SideBarOptions from "../../ui/SideBarOptions/SideBarOptions"
import FriendsList from "../../ui/FriendsList/FriendsList"
import SidebarMenu from "./SidebarMenu"
const Sidebar = props => {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  return (
    <>

      {appState.loggedIn ? (
        <Nav className="col-md-12  d-md-block sidebar" style={{ width: props.width || "300px" }} activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
          <Input />
          <SideBarOptions />
          <FriendsList />
          <Profile />
        </Nav>

      ) : (
        ""
      )}

  <div className="sidebar-menu">
    <SidebarMenu/>
  </div>

    </>
  )
}

//? what does withRouter do?
// const Sidebar = withRouter(Side)
export default Sidebar
