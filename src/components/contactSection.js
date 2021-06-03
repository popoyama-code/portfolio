import * as React from "react"
import styled from 'styled-components'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import Heading from './shared/heading'

import properties from './_settings/_properties'

const ContactSection = ({children, ...props}) => {
  return (
    <StyledContactSection>
      <StyledContactContent>
        <Heading margin="0 0 3rem 0">CONTACT</Heading>
        <p>ご連絡をお待ちしております。</p>
      </StyledContactContent>
      <StyledContactContent>
        <NetlifyForm name='contact' honeypotName='bot-field'>
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              <StyledInputWrap>
                <StyledLabel htmlFor='name'>お名前</StyledLabel>
                <StyledTextbox type='text' name='name' id='name' onChange={handleChange} required />
              </StyledInputWrap>
              <StyledInputWrap>
                <StyledLabel htmlFor='email'>ご連絡先メールアドレス</StyledLabel>
                <StyledTextbox type='email' name='email' id='email' onChange={handleChange} required />
              </StyledInputWrap>
              <StyledInputWrap>
                <StyledLabel htmlFor='message'>本文</StyledLabel>
                <StyledTextarea
                  type='text'
                  name='message'
                  id='message'
                  rows='5'
                  onChange={handleChange}
                  required
                />
              </StyledInputWrap>
              <div>
                <StyledButton type='submit'>送信</StyledButton>
              </div>
              {success && <p>サーバーに送信しました。</p>}
              {error && (
                <p>サーバーに送信出来ませんでした。お手数ですが、また後ほどお試しください。</p>
              )}
            </>
          )}
        </NetlifyForm>
      </StyledContactContent>
    </StyledContactSection>
  )
}
 
const StyledContactSection = styled.section(props => `
  display: flex;
  margin: 10rem auto;
  max-width: 1080px;
`)

const StyledContactContent = styled.div(props => `
  flex: 0 0 50%;
  font-size: ${properties.FONT.SIZE_S};
`)

const StyledLabel = styled.label(props => `
  display: block;
  margin-bottom: .5rem;
`)

const StyledTextbox = styled.input(props => `
  background-color: #f7f9f9;
  border:solid #d1d3d3;
  border-radius: 0;
  border-width: 0 0 3px 0;
  display: block;
  font-size: ${properties.FONT.SIZE_M};
  padding: 1rem 1rem;
  width: 100%;
`)

const StyledTextarea = styled.textarea(props => `
  background-color: #f7f9f9;
  border:solid #d1d3d3;
  border-radius: 0;
  border-width: 0 0 3px 0;
  display: block;
  font-size: ${properties.FONT.SIZE_M};
  padding: 1rem 1rem;
  width: 100%;
`)

const StyledInputWrap = styled.div(props => `
  margin-bottom: 2rem;
`)

const StyledButton = styled.button(props => `
  background-color: #4A8FE7;
  border: none;
  color: ${properties.COLOR.WHITE};
  cursor: pointer;
  font-size: ${properties.FONT.SIZE_M};
  padding: 1rem 3rem;
`)

export default ContactSection
 