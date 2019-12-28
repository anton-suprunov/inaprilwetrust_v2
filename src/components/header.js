import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss";

const Header = ({ pageTitle }) => (
  <header className="site-title">
    <Link to="/">Inaprilwetrust</Link>
    <span>« {pageTitle}</span>
  </header>
)

Header.propTypes = {
  pageTitle: PropTypes.string,
}

export default Header
