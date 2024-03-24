import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <div className="logo">
              <p>Matic.dev</p>
          </div>
        </div>
        <div className="right-header">
          <ul>
            <a href="#home"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#project"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
