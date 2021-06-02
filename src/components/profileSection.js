import * as React from "react"
import styled from 'styled-components' 
import Heading from './shared/heading'
import Section from '../components/shared/section'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ProflileSection = ({children}) => {
  React.useEffect(() => {
    const profileWrap = document.querySelector("#profile-wrap")
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause"
    })
    const panels = gsap.utils.toArray("#profile-wrap .panel")
    gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: "#profile-wrap",
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (profileWrap.offsetWidth - window.innerWidth)
      }
    })
  }, [])

  return (
    <Section>
      <StyledProfileWrap id="profile-wrap">
        <StyledProfilePanel background="yellow" className="panel">
          <Heading>PROFILE</Heading>
        </StyledProfilePanel>
        <StyledProfilePanel background="green" className="panel">
          {children}
        </StyledProfilePanel>
      </StyledProfileWrap>
    </Section>
  )
}
 
const StyledProfileWrap = styled.div(props => `
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  background-color: #ddd;
  width: 200%;
`)

const StyledProfilePanel = styled.div(props => `
  background: ${props.background || "#fff"};
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  color: #333;
  text-align: left;
  border-right: 1px solid #fff;
`)

export default ProflileSection
 