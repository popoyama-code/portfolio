import * as React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../../styles/reset.min.css'
import '../../styles/layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /*
  React.useEffect(() =>{
      // cursor
      const cursor = document.getElementById("cursor-elm")
      document.addEventListener('mousemove', e => {
        cursor.style.left = e.pageX - 5 + "px"
        cursor.style.top = e.pageY - 5 + "px"
      })
  }, [])
  */

  return (
    <>
      <StyledCursor id="cursor-elm" />

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>

    </>
  )
}

const StyledCursor = styled.div(props => `
  background: #333;
  border-radius: 50%;
  display: none;
  height: 10px;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 10px;
  z-index: 10000;
`)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
