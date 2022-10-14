import React from "react"
import { Link } from "react-router-dom"
import Page from "../ui/Page"
import "./css/Call.css"

function Call(props) {
  return (
    <>
      <Page>
        <div style={{ height: "350px" }} className="call-section" data-aos="zoom-up" data-aos-offset="1" data-aos-easing="ease-in-sine" data-aos-duration="1400">
          <div>
            <h1 className="call-title">{props.title}</h1>
          </div>
          <div>
            <Link className="bttn bttn--color-white btn--large btn--theme btn--shadow " to="/register">
              Register
            </Link>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Call
