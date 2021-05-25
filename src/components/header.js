import React from "react"

import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Dangsee</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
