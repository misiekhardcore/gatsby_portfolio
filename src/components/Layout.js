import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar handleToggle={setIsOpen}/>
      <Sidebar isOpen={isOpen} handleToggle={setIsOpen}/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
