import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ handleToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar--center">
        <div className="navbar__header">
          <img src={logo} alt="logo" />
          <button className="toggleBtn" onClick={() => handleToggle(true)}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="navbar__links" />
      </div>
    </nav>
  )
}

export default Navbar
