import React from 'react'
import styled from 'styled-components'

const Section = ({children, ...props}) => {
  let skewStyle = null
  if (props.skew) {
    skewStyle = `
      position: relative;
      z-index: 0;
      :before {
        content: '';
        position: absolute;
        left:0;
        bottom: 0;
        transform: skewY(-5deg);
        transform-origin: bottom right;
        z-index: -1;
        width:100%;
        height:100%;
        background:${props.background};
      }
      :after {
        content: '';
        position: absolute;
        left:0;
        top: 0;
        transform: skewY(-5deg);
        transform-origin: top left;
        z-index: -1;
        width:100%;
        height:100%;
        background:${props.background};
      }
    `
  }

  return (
    <StyledSection {...props} skewStyle={skewStyle}>{children}</StyledSection>
  )
}

const StyledSection = styled.section(props => `
  background: ${props.background || "transparent"};
  display: inline-block;
  height: ${props.styleHeight || "100%"};
  margin: ${props.margin || 0};
  padding: ${props.padding || "5rem 2rem"};
  width: ${props.styleWidth || "100%"};
  ${props.skewStyle || ""}
`)

export default Section