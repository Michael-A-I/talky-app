import React from "react"
import "./css/Information.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function InformationDisplay() {
  return (
    <>
      <Row className="information-display-wrapper">
        <Col className="information-display-item">
          <i class="fa-thin fa-group-arrows-rotate"></i>
          <div className="information-display-text">
            <p>Repair Operations.</p>
          </div>
        </Col>
        <Col className="information-display-item">
          <i class="fa-solid fa-people-line"></i>
          <div className="information-display-text">
            <p>Affordable oil changes.</p>
          </div>
        </Col>{" "}
        <Col className="information-display-item">
          <i class="fa-solid fa-people-line"></i>
          <div className="information-display-text">
            <p>Welding and exhaust problem fixes.</p>
          </div>
        </Col>{" "}
        <Col className="information-display-item">
          <i class="fa-solid fa-phone"></i>
          <div className="information-display-text">Professional car diagnostics.</div>
        </Col>
      </Row>
    </>
  )
}

export default InformationDisplay
