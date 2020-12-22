import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--show" : ""}`}>
      <button className="close-btn" onClick={() => handleToggle(false)}>
        <FaTimes />
      </button>
      <div className="sidebar__container">
        <Links styleClass={isOpen ? "sidebar__links" : ""} />
        <SocialLinks styleClass={isOpen ? "sidebar__icons" : ""} />
      </div>
    </aside>
  )
}

export default Sidebar
