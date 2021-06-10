import * as React from "react"
import styled from 'styled-components' 
import BgImage from '../images/herob.jpg'
import ArrowImg from '../images/arrow.svg'

import properties from './_settings/_properties'

const HeroSection = ({children, ...props}) => {
  return (
    <StyledHeroSection>
      <StyledHeroWrap>
        <StyledStripe />
        <StyledHeadingWrap>
          <StyledHeadingPrimary fontColor={properties.COLOR.WHITE}>Shuya Oyama</StyledHeadingPrimary>
          <StyledHeadinSecondary fontColor={properties.COLOR.WHITE}>Web Engineer</StyledHeadinSecondary>
        </StyledHeadingWrap>
      </StyledHeroWrap>
      <StyledArrowWrap>
        <StyledSGuideSign>
          <p>SCROLL</p>
          <img src={ArrowImg} alt="scroll" />
        </StyledSGuideSign>
      </StyledArrowWrap>
    </StyledHeroSection>
  )
}
 
const StyledHeroWrap = styled.div(props => `
  align-items: center;
  background-image: url(${BgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 0;
`)

const StyledHeroSection = styled.section(props => `
  height: 100vh;
  max-height: 1000px;
`)

const StyledStripe = styled.div(props => `
  background-size: auto auto;
  background-image: repeating-linear-gradient( 
    0deg
     ,transparent,transparent 10px,rgba(255,255,255,.1) 10px,rgba(255,255,255,.1) 20px );
  display: inline-block;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`)

const StyledHeadingWrap = styled.div(props => `
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`)

const StyledHeadingPrimary = styled.h1(props => `
  color: ${properties.COLOR.WHITE};
  font-size: 3rem;
  @media screen and (${properties.MEDIA.NOT_SP}) {
    font-size: 7rem;
  }
`)

const StyledHeadinSecondary = styled.h1(props => `
  color: ${properties.COLOR.WHITE};
  font-size: 2rem;
  @media screen and (${properties.MEDIA.NOT_SP}) {
    font-size: 3rem;
  }
`)

const StyledArrowWrap = styled.div(props => `
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: center;
  width: 100%;
`)

const StyledSGuideSign = styled.div(props => `
  animation: move .7s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  font-size: ${properties.FONT.SIZE_S};
  img {
    margin: 0 auto;
    width: 3.5rem;
    height: 3.5rem;
  }
  @keyframes move {
    from { transform: translateY(-0.5rem); }
    to { transform: translateY(.5rem); }
  }
`)

export default HeroSection
 