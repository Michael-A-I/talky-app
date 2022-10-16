import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
/* user context */
import DispatchContext from "../../context/DispatchContext"
import StateContext from "../../context/StateContext"
import Page from "../ui/Page"
import "./css/Navbar.css"

import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web"
import algoliasearch from "algoliasearch"
import Logo from "./Logo"
import DropDown from "./DropDown"
import CenterMenu from "./CenterMenu"
import ProfileDropdown from "./ProfileDropdown"
// import HitsView from "./Navbar/HitsView"
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js"
import Autocomplete from "./AutoComplete"
import PostsHits from "./PostsHits"
import "@algolia/autocomplete-theme-classic"
import Hamburger from "./Hamburger"
import NotificationButtion from "./Notifications/NotificationButtion"
import NotificationProvider from "./Notifications/NotificationsProvider"
import { Container } from "react-bootstrap"
import Input from "../ui/Input/Inputs"
import PageLogo from "../ui/PageLogo/PageLogo"
import NavMenu from "../ui/NavMenu/NavMenu"
import NavBarRight from "../ui/NavBarRight/NavBarRight"

/* Algolia Search */
const searchClient = algoliasearch("SJKC9QEQKE", "cce92e4d566fb529a97a2eb8b9993578")
function Navbar() {
  /* user context  changed through navbar */
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const token = appState.user.token
  const [click, setClick] = useState(false)

  const history = useNavigate()
  const [search, setSearch] = useState("")
  const [dropdown, setDropdown] = useState([])

  console.log(appState)

  useEffect(() => {
    algoliaPostIndex()
    algoliaTicketIndex()
  }, [])

  const algoliaPostIndex = async () => {
    await fetch("/api/search/indexSearch", {
      headers: {
        method: "GET",
        "x-access-token": token
      }
    })
  }

  const algoliaTicketIndex = async () => {
    await fetch("/api/search/indexTickets", {
      headers: {
        method: "GET",
        "x-access-token": token
      }
    })
  }

  return (
    <InstantSearch indexName="posts" searchClient={searchClient}>
      <div id="bootstrap-overrides">
        <nav className={`navbar ${!appState.loggedIn ? "authentication" : ""}`}>
          <Container style={{ margin: "0px auto 0px 0px" }}>
            <div className="navbar-container ">
              {/* Navbar Links */}
              {/* search for posts : links about site */}
              {/* TODO: style search and dropdowns */}

              {appState.loggedIn ? (
                <>
                  <div className="nav-search">
                    {/* <CenterMenu /> */}
                    <PageLogo />
                    <NavMenu />

                    <NavBarRight />

                    {/* <ProfileDropdown /> */}
                  </div>
                </>
              ) : (
                <CenterMenu />
              )}
              {/* Authentication Links */}
              {appState.loggedIn ? (
                <>
                  {/* ProfileDrowndown */}
                  {/* <ProfileDropdown click={click} setClick={setClick} /> */}
                  {/* ProfileDrowndown */}
                </>
              ) : (
                <>
                  {/* Authentication handler */}
                  {/* Authentication handler */}
                </>
              )}
            </div>
          </Container>
        </nav>
      </div>
    </InstantSearch>
  )
}

export default Navbar
// TODO: fix profile as it get smaller
