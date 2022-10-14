import React, { useContext } from "react"
import { Button, Card, Jumbotron, Row } from "react-bootstrap"

/* Components */

import Page from "../ui/Page"
// import "./css/Home.css"
import { Link } from "react-router-dom"
import Hero from "./Hero/Hero"
import Information from "./Information/Information"
import MoreInfo from "./MoreInfo/MoreInfo"

/* Styles */
// import "./css/Home.css"
import city from "./img/city-g67037dec1_1280.png"
import social from "./img/social-media-g291c9f196_1920.png"

/* messages 4 props */
import { home, moreInfo, call } from "../helper/homemsg"
import Call from "../Call/Call"
import { propTypes } from "react-bootstrap/esm/Image"

function Home() {
  return (
    <>
      <Hero title={home.title} description={home.description} />
      <Information />
      <MoreInfo img={social} title={moreInfo.section_one.title} description={moreInfo.section_one.description} />
      <MoreInfo img={city} title={moreInfo.section_two.title} description={moreInfo.section_two.description} />
      <Call title={call.title} />
    </>
  )
}

export default Home
