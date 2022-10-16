import React from "react"
import { Button, Form } from "react-bootstrap"

function Input() {
  return (
    <>
      <div style={{ background: "#2F3136", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search Friends List" style={{ color: "#a3a6aa", background: "#202225" }} />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Input
