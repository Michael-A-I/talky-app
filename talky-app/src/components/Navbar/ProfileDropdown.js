import React, { useContext, useState } from "react"
import { Button, Dropdown, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import DispatchContext from "../../context/DispatchContext"
import StateContext from "../../context/StateContext"
import Userfront from "@userfront/core"

import "./css/ProfileDropdown.css"

function ProfileDropdown(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const history = useNavigate()

  // Initialize Userfront Core JS
  Userfront.init(process.env.REACT_APP_USER_FRONT)

  async function logout() {
    localStorage.clear()
    appDispatch({ type: "logout" })
    Userfront.logout()
  }

  return (
    <>
      <ul className={props.click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-profile">
          <Link className="nav-search-buttons-item nav-search-buttons-item--primary  hide-big" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-search-buttons-item nav-search-buttons-item--primary hide-big" to="/post/new">
            Create Posts
          </Link>
        </li>
        <li>
          <Link className="nav-search-buttons-item nav-search-buttons-item--primary  hide-big" to="/post/new">
            View Posts
          </Link>
        </li>
        <li>
          <Link className="nav-search-buttons-item nav-search-buttons-item--primary  hide-big" to="/post/new">
            Search
          </Link>
        </li>
        <li>
          <Link className="nav-search-buttons-item nav-search-buttons-item--primary  hide-big" to="/post/new">
            Create Posts
          </Link>
        </li>
        <li>
          <Button onClick={logout} className="btn-warning nav-search-buttons-item hide-big">
            Logout
          </Button>
        </li>
        <li>
          <Dropdown id="hide-small">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {appState.user.first} {appState.user.last}
            </Dropdown.Toggle>

            {/* <Dropdown.Toggle variant="success" id="dropdown-basic-md">
              <i class="fa-solid fa-circle-chevron-down"></i>
            </Dropdown.Toggle> */}

            <Dropdown.Menu style={{ padding: "40px" }}>
              <div className={"dropdown-nav-title"}>
                <i class="fa-solid fa-person"></i>
                <p style={{ margin: "0px", color: "grey" }}>person</p>
              </div>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/profile">Avatar</Dropdown.Item>

              <div className={"dropdown-nav-title"}>
                <i class="fa-solid fa-eye"></i>
                <p style={{ margin: "0px", color: "grey" }}>view options</p>
              </div>
              <Form.Check type="switch" id="custom-switch" label="Online Status" reverse style={{ textAlign: "left", padding: "0px 6px 0px 15px" }} />
              <Form.Check type="switch" id="custom-switch" label="Dark Mode" reverse style={{ textAlign: "left", padding: "0px 6px 0px 15px" }} />
              <div className={"dropdown-nav-title"}>
                <i class="fa-solid fa-fire"></i>
                <p style={{ margin: "0px", color: "grey" }}>campfire</p>
              </div>
              <Dropdown.Item href="/profile">Create Campfire</Dropdown.Item>
              <Dropdown.Item href="/profile">Find Campfire</Dropdown.Item>
              {/* <Dropdown.Item href={`#/u/${appState.user.id}/notifications`}>Subscription</Dropdown.Item>
              <Dropdown.Item href="/contactme">Contact Me</Dropdown.Item> */}
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </>
  )
}

export default ProfileDropdown
