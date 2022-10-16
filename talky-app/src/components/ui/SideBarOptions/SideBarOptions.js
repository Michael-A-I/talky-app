import React from "react"
import "./css/SideBarOptions.css"

function SideBarOptions() {
  return (
    <>
      <div className="sidebar-options-container">
        <ul style={{ listStyle: "none" }}>
          <li>
            <div className="sidebar-option">
              <div className="sidebar-option-logo-container">
                <i class="fa-solid fa-person page-logo-fa-person sidebar-logo"></i>
              </div>
              <div className="sidebar-tag sidebar-friends">Friends</div>
            </div>
          </li>
          <li>
            <div className="sidebar-option">
              <div className="sidebar-option-logo-container">
                <i class="fa-brands fa-free-code-camp sidebar-logo"></i>
              </div>
              <div className="sidebar-tag sidebar-campfire">Campfire</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBarOptions
