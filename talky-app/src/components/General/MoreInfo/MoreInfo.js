import React from "react"
import { Col, Row } from "react-bootstrap"
import Page from "../../ui/Page"

/* CSS */
import "./css/MoreInfo.css"
function MoreInfo(props) {
  return (
    <>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <Page style={{ padding: "20px", margin: "10px" }}>
          <Row>
            <Col>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img className="more-info-img" src={`${props.img}`} alt="" srcset="" />
              </div>
            </Col>
            <Col>
              {/* <h1>Create an space for you to share your thoughts</h1> */}
              <h1 className="more-info-title">{props.title}</h1>
              {/* <p>Campfire servers allow you a place for all of your family, friends, co-workers, to gather together around a campfire. Tell stories, ask question, find new communities, or just check-in.</p> */}
              <p className="more-info-description">{props.description}</p>
            </Col>
          </Row>
        </Page>
      </div>
    </>
  )
}

export default MoreInfo
