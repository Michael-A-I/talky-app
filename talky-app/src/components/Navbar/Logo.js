import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Jumbotron, Row, Col } from "react-bootstrap"
import { home } from "../helper/homemsg"
import "./css/Logo.css"

function Logo() {
  return (
    <>
      {/* Navbar Logo */}

      <div className="navbar-logo-container">
        <Row>
          <Col style={{ padding: "0px", border: "2px solid white" }}>
            <Link className="navbar-logo" to="/dashboard">
              <i class="fa-brands fa-free-code-camp"></i>
            </Link>
          </Col>
          <Col>
            <Link style={{ textDecoration: "none", color: "white" }} to="/dashboard">
              <h3 className="navbar-logo-title">{home.title.toUpperCase()}</h3>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Logo
