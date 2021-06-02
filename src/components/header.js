import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components' 
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import properties from "../components/_settings/_properties"

import GitHubIcon from "../images/GitHub-Mark.svg"

const Header = ({ siteTitle }) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const showAnim = gsap.from('#headerbar', { 
      yPercent: -100,
      paused: true,
      duration: 0.2,
    }).progress(1)
    
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    })
  }, [])

  return (
    <StyledHeader id="headerbar">
      <StyledNavi>
        <StyledNaviList>
          <StyledNaviItem>
            <Link to="https://github.com/popoyama-code" >
              <StyledIcon src={GitHubIcon} />
            </Link>
          </StyledNaviItem>
        </StyledNaviList>
      </StyledNavi>
</StyledHeader>
  )
}

const StyledHeader = styled.header(props => `
  display: flex;
  position: fixed;
  width: 100vw;
  z-index: 1000;
`)

const StyledNavi = styled.nav(props => `
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`)

const StyledNaviList = styled.ul(props => `
  display: flex;
`)

const StyledNaviItem = styled.li(props => `
  align-items: flex-end;
  display: flex;
  height: 10rem;
  justify-content: center;
  margin-right: 2rem;
  transform: translateY(-1rem);
  transition: all .5s ease;
  width: 9rem;
  :hover {
    transform: translateY(-.5rem);
  }
`)

const StyledIcon = styled.img(props => `
  width: 100%;
  height: auto;
  padding: 20%;
  margin: 0 auto;
`)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
