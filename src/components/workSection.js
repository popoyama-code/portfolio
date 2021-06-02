import * as React from "react"
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from "gatsby"
import Heading from '../components/shared/heading'
import Section from '../components/shared/section'
import DoubleSidedCard from "../components/shared/doublesided-card"
import properties from "./_settings/_properties"

import GitHubIcon from "../images/GitHub-Mark.svg"
import PlayIcon from "../images/play.svg"

const WorkSection = ({children}) => {
  const markdown = useStaticQuery(graphql`
    query WorksQuery {
      allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}) {
        edges {
          node {
            html
            frontmatter {
              id
              title
              link
              github
              tag
              description
            }
          }
        }
      }
    }
  `)
  const items = markdown.allMarkdownRemark.edges.map(({node}, index) => {
    let wrapperClass = "gs_reveal"
    console.log(node.frontmatter.tag)
    if (index % 2 === 0) {
      wrapperClass += " gs_reveal_fromRight";
    } else {
      wrapperClass += " gs_reveal_fromLeft";
    }
    return (
      <StyledWorkItem key={index}>
        <div className={wrapperClass}>
          <DoubleSidedCard frontButton="スクリーンショット" backButton={node.frontmatter.title}>
            <StyledCardDataWrap>
              <StyledCardLink>
                <li onClick={(e) => e.stopPropagation()}><Link to={node.frontmatter.link}><StyledIcon src={PlayIcon}/></Link></li>
                <li onClick={(e) => e.stopPropagation()}><Link to={node.frontmatter.link}><StyledIcon src={GitHubIcon}/></Link></li>
              </StyledCardLink>
              <StyledCardData>
                <div>タイトル</div>
                <div>{node.frontmatter.title}</div>
              </StyledCardData>
              <StyledCardData>
                <div>使用技術</div>
                <div>{node.frontmatter.tag.join(' / ')}</div>
              </StyledCardData>
              <StyledCardData>
                <div>解説</div>
                <div>{node.frontmatter.description}</div>
              </StyledCardData>
            </StyledCardDataWrap>
            <StyledCardThumbnailWrap>
              <div dangerouslySetInnerHTML={{__html:node.html}} />
              <StyledCardThumbnailCaption>{node.frontmatter.title}</StyledCardThumbnailCaption>
            </StyledCardThumbnailWrap>
          </DoubleSidedCard>
        </div>
      </StyledWorkItem>
    )
  })

  return (
    <Section background="#f7f9f9" padding="5rem 0" margin="10% auto" skew={true}>
      <StyledWorkWrap>
        <Heading>MY WORK</Heading>
        <StyledWorkList>
          {items}
        </StyledWorkList>
      </StyledWorkWrap>
    </Section>
  )
}
 
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
  flex-direction: row-reverse;
  flex-wrap: wrap;
`)

const StyledWorkItem = styled.li(props => `
  height: auto;
  list-style: none;
  margin: 0;
  padding: 1rem;
  width: 50%;
  &:nth-child(even) {
    transform: translateY(5rem);
  }
`)

const StyledCardThumbnailWrap = styled.div(props => `
  height: 100%;
  position: relative;
  width: 100%;
`)

const StyledCardThumbnailCaption = styled.div(props => `
  align-items: center;
  background-color: ${properties.COLOR.WHITE};
  color: #4A8FE7;
  display: flex;
  font-size: ${properties.FONT.SIZE_S};
  justify-content: center;
  height: 5rem;
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
`)

const StyledCardDataWrap = styled.div(props => `
  padding: 5rem;
`)
const StyledCardLink = styled.ul(props => `
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
`)
const StyledCardData = styled.div(props => `
  display: flex;
  font-size: ${properties.FONT.SIZE_S};
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  div:nth-child(1) {
    font-weight: 700;
  }

  div:nth-child(2) {
    width: 70%;
  }
`)

const StyledIcon = styled.img(props => `
  width: 4rem;
  height: 4rem;
`)

 export default WorkSection
