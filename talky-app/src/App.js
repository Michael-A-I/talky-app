import React, { useContext, useReducer, useState, Suspense } from "react"
import { Routes, BrowserRouter, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"

/* Context */
import StateContext from "./context/StateContext"
import DispatchContext from "./context/DispatchContext"

/* Components */
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Navbar/Sidebar/Sidebar"
import Home from "./components/General/Home"
/* auth */
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"
import ResetPassword from "./components/Authentication/ResetPassword"
import SendReset from "./components/Authentication/SendReset"
import Toasty from "./components/ui/Toasty"

/* Styles */
import "./App.css"

/* helpers */
import msgContext from "./components/ui/helpers/toastyMessages"
import CreateCampfire from "./components/Campfire/CreateCampfire/CreateCampfire"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("token")),
    user: {
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
      first: localStorage.getItem("firstName"),
      last: localStorage.getItem("lastName"),
      email: localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar"),
      id: localStorage.getItem("id"),
      createdAt: localStorage.getItem("createdAt")
    },
    notification: false,
    message: {
      show: false,
      poisiton: "center",
      msg: "",
      title: "",
      context: ""
    }
  }

  function ourReducer(draft, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        return
      case "logout":
        draft.loggedIn = false
        return
      case "message":
        draft.message = {
          show: action.show,
          poisiton: "center",
          msg: action.msg,
          title: action.title,
          context: action.context
        }
        return
    }
  }
  /* immer avoids directly muttating state. */

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <div className="toast-display-center">
              <Toasty />
            </div>
            {state.loggedIn ? <Sidebar width={"400px"} /> : ""}
            <Navbar />

            <Routes>
              <Route element={<Home />} exact path="/" />
              {/* Authentication Routes */}
              <Route element={<Login />} exact path="/login" />
              <Route element={<Register />} exact path="/register" />
              <Route element={<ResetPassword />} exact path="/reset" />
              <Route element={<SendReset />} exact path="/forgotpassword" />
              <Route element={<CreateCampfire />} exact path="/createcampfire" />
            </Routes>
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
