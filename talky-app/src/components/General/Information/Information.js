import React from "react"
import InformationDisplay from "./InformationDisplay"
import InformationHeader from "./InformationHeader"

import Page from "../../ui/Page"

function Information() {
  return (
    <>
      <Page style={{ padding: "80px 0px 150px 0px", border: "1px solid black" }}>
        <div className="information-wrapper" div data-aos="fade-up" data-aos-offset="10" data-aos-easing="ease-in-sine" data-aos-duration="1000">
          <InformationHeader />
          <InformationDisplay />
        </div>
      </Page>
    </>
  )
}

export default Information
