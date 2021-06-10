import React from 'react'
import styled from 'styled-components'
import properties from '../_settings/_properties'

const Heading = ({children, level=1, ...props}) => {
  return (
    <StyledHeading id="app-header" as={`h${level}`} {...props}>{children}</StyledHeading>
  )
}

const StyledHeading = styled.div(props => `
  color: ${props.fontColor || properties.COLOR.BLACK};
  display: block;
  font-size: ${props.fontSize || properties.FONT.SIZE_L};
  line-height: ${props.lineHeight || 1};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  transform: ${props.transform || ""};
  z-index: 1000;
`)

export default Heading