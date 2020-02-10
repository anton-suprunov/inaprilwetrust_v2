import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children, showHeader, pageTitle }) => {
  return (
    <>
      {showHeader && <Header pageTitle={pageTitle} />}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  showHeader: PropTypes.bool,
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
