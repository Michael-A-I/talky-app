import React, { useContext } from "react"
import { Row } from "react-bootstrap"
import Page from "../../ui/Page"
import StateContext from "../../../context/StateContext"
import { Link } from "react-router-dom"
import "./css/Hero.css"
import { propTypes } from "react-bootstrap/esm/Image"

function Hero(props) {
  const appState = useContext(StateContext)
  return (
    <>
      <div className="hero-background">
        <Page style={{ padding: "0px" }}>
          <div id="override-bootstrap" className="home-container">
            <div className="hero-jumbotron" data-aos="zoom-out" data-aos-offset="10" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <Row>
                <h1 className="hero-title">{props.title.toUpperCase()}</h1>
              </Row>
              <Row>
                <p className="hero-subtitle">{props.description}</p>
              </Row>

              <Row>
                {appState.loggedIn ? (
                  <div className="hero-btn-container">
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </div>
                ) : (
                  <>
                    <div className="hero-btn-container">
                      <Link className="bttn btn--large btn--white btn--shadow " to="/login">
                        Login
                      </Link>
                      <Link className="bttn btn--large btn--white btn--shadow " to="/register">
                        Register
                      </Link>
                    </div>
                  </>
                )}
              </Row>
            </div>
          </div>
        </Page>
      </div>
    </>
  )
}

export default Hero
