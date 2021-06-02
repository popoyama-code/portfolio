import * as React from "react"
import styled from 'styled-components'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import Heading from './shared/heading'

const ContactSection = ({children, ...props}) => {
  return (
    <StyledContactSection>
      <Heading>CONTACT</Heading>
      <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && <p>Thanks for contacting us!</p>}
            {error && (
              <p>Sorry, we could not reach our servers. Please try again later.</p>
            )}
            <div>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' id='name' onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea
                type='text'
                name='message'
                id='message'
                rows='4'
                onChange={handleChange}
              />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </>
        )}
      </NetlifyForm>
    </StyledContactSection>
  )
}
 
const StyledContactSection = styled.section(props => `
  margin: 0 auto;
  max-width: 1080px;
`)

export default ContactSection
 