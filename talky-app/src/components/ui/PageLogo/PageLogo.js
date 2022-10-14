import React from "react"
import "./css/PageLogo.css"

function PageLogo() {
  return (
    <>
      <div className="page-logo-container">
        <div className="page-logo-image">
          <i class="fa-solid fa-person page-logo-fa-person"></i>
        </div>
        <div className="page-logo-text-container">
          <p className="page-logo-text">Friends</p>
        </div>
      </div>
    </>
  )
}

export default PageLogo
