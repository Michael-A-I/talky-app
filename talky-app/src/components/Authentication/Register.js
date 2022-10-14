import { Link, useNavigate } from "react-router-dom"

import { useContext, useEffect } from "react"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Register.css"
import Page from "../ui/Page"
import { Button, Card, Form, Toast } from "react-bootstrap"
// import FlashMessage from "./react-flash-message"

/* Toasty Alerts */
import msgConext from "../ui/helpers/toastyMessages"

/* Userfront */
import Userfront from "@userfront/core"
import StateContext from "../../context/StateContext"
import DispatchContext from "../../context/DispatchContext"
Userfront.init(process.env.REACT_APP_USER_FRONT)

function Register() {
  const navigate = useNavigate()
  /* Context */
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const [message, setMessage] = useState()
  const [register, setRegister] = useState({ email: "", firstName: "", lastName: "", password: "", confirmPassword: "" })

  const handleChange = event => {
    event.preventDefault()

    const target = event.target
    console.log(target.name)
    console.log(target.value)

    setRegister(prev => ({ ...prev, [target.name]: target.value }))
  }

  async function handleSubmit(e) {
    /* Send data to  */
    e.preventDefault()
    console.log("Register")
    const form = e.target

    try {
      const formData = {
        method: "password",
        email: register.email,
        password: register.password,
        name: register.firstName,
        lastName: register.lastName,
        data: {
          firstName: register.firstName,
          lastName: register.lastName,
          email: register.email
        }
      }

      // !userfront registration
      const udata = await Userfront.signup(formData)

      // appned userfront data to backend
      formData.data.userId = udata.userId
      formData.data.username = udata.username

      const dataToDb = formData.data

      // !mongoose registration

      const res = await fetch(
        "/api/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(dataToDb)
        },
        console.log(dataToDb)
      )

      const serverRes = await res.json()

      appDispatch({ type: "message", show: true, msg: serverRes.message, title: msgConext.good, context: msgConext.success })
    } catch (err) {
      console.log(err)

      appDispatch({ type: "message", show: true, msg: err.message, title: msgConext.bad, context: msgConext.danger })
    }
  }

  return (
    <>
      {console.log(register)}{" "}
      <Page style={{ paddingLeft: "0px" }} title="Register">
        {message === "Success" ? navigate("/login") : ""}
        <div className="center-page">
          <Card style={{ width: "35rem", backgroundColor: "#36393f", marginTop: "100px" }}>
            <Card.Body>
              <Card.Title className="card-center-title">Create an Account</Card.Title>

              <Form className="form-group-styles" onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control style={{ color: "black" }} name="firstName" type="text" /*placeholder="Enter First Name" */ required minLength={2} maxLength={25} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control style={{ color: "black" }} name="lastName" type="text" /*placeholder="Enter Last Name"  */ required minLength={2} maxLength={25} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control style={{ color: "black" }} name="email" type="email" /*placeholder="Enter email"  */ required onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control style={{ color: "black" }} name="password" type="password" /*placeholder="Password"  */ required minLength={5} maxLength={100} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control style={{ color: "black" }} name="confirmPassword" type="password" /* placeholder="Password"  */ required minLength={5} maxLength={100} onChange={handleChange} />
                </Form.Group>
                <Button type="submit">Sumbit</Button>
                <div style={{ paddingTop: "25px" }}>
                  <p className="form-footer">
                    Already have an account{" "}
                    <Link className="link-style" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Page>
      {/* initial state show nothing */}
    </>
  )
}

export default Register
