import React from "react"
import "./css/NavBarRight.css"

function NavBarRight() {
  return (
    <>
      <div className="navbar-right" style={{ border: "10px solid whtie" }}>
        <div className="navbar-right-container">
          <div className="navbar-right-box">
            <i className="fa-solid fa-inbox"></i>
          </div>
          <div className="navbar-right-box">
            <div className="navbar-right-question-container">
              <i className="fa-solid fa-question"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBarRight
