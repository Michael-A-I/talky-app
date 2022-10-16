import React from "react"
import { Button } from "react-bootstrap"
import "./css/NavMenu.css"

function NavMenu() {
  return (
    <>
      <ul className="navmenu-container">
        <li className="navmenu-list-item">
          <div className="navmenu-list-item-container">
            <p className="navmenu-list-item-text">Online</p>
          </div>
        </li>
        <li className="navmenu-list-item">
          <div className="navmenu-list-item-container">
            <p className="navmenu-list-item-text">All</p>
          </div>
        </li>

        <li className="navmenu-list-item">
          <div className="navmenu-list-item-container">
            <p className="navmenu-list-item-text">Pending</p>
          </div>
        </li>

        <li className="navmenu-list-item">
          <div className="navmenu-list-item-container--button">
            <button className="navmenu-list-button">Add friend</button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default NavMenu
