import React from "react"
import { Button, Card, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function CreateCampfire() {
  return (
    <div className="center-page">
      <Card style={{ width: "35rem", backgroundColor: "#36393f", marginTop: "100px" }}>
        <Card.Body>
          <Card.Title className="card-center-title">Create Campfire</Card.Title>
          {/* <Card.Subtitle className="card-sub-title">Nice to see you again!</Card.Subtitle> */}

          {/* Credentials */}
          <Form className="form-group-styles" /*onSubmit={e => handleSubmit(e)}*/>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control style={{ color: "black" }} name="title" type="text" /* value={login.email} placeholder="Enter email"*/ required minLength={5} maxLength={30} /*onChange={e => handleChange(e)}*/ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control style={{ color: "black" }} name="password" type="password" /*  value={login.password} placeholder="Enter password"*/ required minLength={5} maxLength={30} /*onChange={e => handleChange(e)}*/ />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Invite Friends</Form.Label>
              <Form.Control style={{ color: "black" }} name="password" type="password" /*  value={login.password} placeholder="Enter password"*/ required minLength={5} maxLength={30} /*onChange={e => handleChange(e)}*/ />
            </Form.Group>

            <Button type="submit">Submit</Button>
            {/* Navigation */}

            <div style={{ paddingTop: "25px" }}>
              <p className="form-footer">
                Forgot your{" "}
                <Link className="link-style" to="/forgotpassword">
                  Password?
                </Link>
              </p>

              <p className="form-footer">
                Need an account?{" "}
                <Link className="link-style" to="/register">
                  Register
                </Link>
              </p>

              <p className="form-footer">
                Sign in as{" "}
                <Link className="link-style" to="#">
                  Demo User
                </Link>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CreateCampfire
