import * as React from "react"
import styled from 'styled-components' 
import Heading from './shared/heading'

const ContactSection = ({children, ...props}) => {
  return (
    <StyledContactSection>
      <Heading>CONTACT</Heading>
      <form name="contact" method="POST" netlify>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </StyledContactSection>
  )
}
 
const StyledContactSection = styled.section(props => `
  margin: 0 auto;
  max-width: 1080px;
`)

export default ContactSection
 