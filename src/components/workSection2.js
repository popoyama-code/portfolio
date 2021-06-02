import * as React from "react"
import styled from 'styled-components' 
import Heading from './shared/heading'
import Section from '../components/shared/section'

const WorkSection = ({children}) => {
  const items = []
  children.forEach((node, index) => {
    items.push((
      <StyledWorkItem key={index}>
        {node}
      </StyledWorkItem>
    ))
  })
  return (
    <Section>
      <StyledProfileWrap>
        <Heading>PROFILE</Heading>
        <StyledWorkList>
          {items}
        </StyledWorkList>
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

const StyledWorkWrap = styled.div(props => `
  margin: 0 auto;
  max-width: 1080px;
  padding-bottom: 5rem;
  position: relative;
  h1 {
    left: 0;
    position: absolute;
    top: 0;
  }
`)

const StyledWorkList = styled.ul(props => `
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`)

const StyledWorkItem = styled.li(props => `
  height: auto;
  list-style: none;
  margin: 0;
  padding: 1rem;
  width: 50%;
`)

export default WorkSection
 