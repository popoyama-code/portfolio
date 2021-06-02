import * as React from "react"
import styled from 'styled-components' 
import Heading from '../components/shared/heading'
import Section from '../components/shared/section'

import properties from './_settings/_properties'

const AboutSection = ({children}) => {
  return (
    <Section padding="5rem 0">
      <StyledAboutWrap>
        <Heading margin="0 0 5rem">ABOUT</Heading>
        <StyledText className="gs_reveal">
          首都圏の開発会社に勤めるWebエンジニアです。主にECサイトやWordPressサイトの受託開発に携わっています。<br />
          フロントエンド、バックエンド、サーバーサイドまで幅広い業務を担当。Web開発を通じて、お客様や、開発メンバー、<br />
          そして社会に貢献し続けられるよう日々努めています。
        </StyledText>
        <StyledText className="gs_reveal">
          スキル<br />
          HTML/CSS/Sass/SCSS/StyledComponents/BEM/AtomicDesign/GSAP/Javascript/React.js/Gatsby/jQuery/PHP/MySQL/WordPress/<br />
          Laravel/Ethna/
        </StyledText>
        <StyledText className="gs_reveal">
          開発環境<br />
          VS Code/PHP Storm/Photoshop/Illustrator/<br />
          Git/Node.js/Gulp/Docker/Apache/FTP/Ubuntu/CentOS/Windows/MacOS/<br />
          Slack/Zoom/
        </StyledText>
      </StyledAboutWrap>
    </Section>
  )
}
 
const StyledAboutWrap = styled.div(props => `
  margin: 0 auto;
  max-width: 1080px;
`)

const StyledText = styled.p(props => `
  font-size: ${properties.FONT.SIZE_S};
  margin-bottom: 2rem;
`)

 export default AboutSection
 