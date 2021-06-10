import * as React from "react"
import styled from 'styled-components'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import Heading from './shared/heading'
import LetterImage from '../components/shared/letterImage'
import Section from '../components/shared/section'

import properties from './_settings/_properties'

const ContactSection = ({children, ...props}) => {
  return (
    <Section>
      <StyledContactWrap>
        <StyledContactContent>
          <Heading level={2} margin="0 0 3rem">CONTACT</Heading>
          <StyledText>ご連絡をお待ちしております。</StyledText>
          <LetterImage styleHeight="auto" styleWidth="50%" />
        </StyledContactContent>
        <StyledContactContent>
          <NetlifyForm name='contact' honeypotName='bot-field'>
            {({ handleChange, success, error }) => (
              <>
                <Honeypot />
                <StyledInputWrap>
                  <StyledLabel htmlFor='name'>お名前</StyledLabel>
                  <StyledTextbox
                   type='text' 
                   name='name' 
                   id='name' 
                   onChange={handleChange} 
                   required 
                  />
                </StyledInputWrap>
                <StyledInputWrap>
                  <StyledLabel htmlFor='email'>ご連絡先メールアドレス</StyledLabel>
                  <StyledTextbox
                   type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    required
                  />
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
      </StyledContactWrap>
    </Section>
  )
}
 
const StyledContactWrap = styled.div(props => `
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1080px;
  @media screen and (${properties.MEDIA.NOT_SP}) {
    flex-direction: row;
  }
`)

const StyledContactContent = styled.div(props => `
  flex: 0 0 50%;
  font-size: ${properties.FONT.SIZE_S};
`)

const StyledLabel = styled.label(props => `
  display: block;
  margin-bottom: .5rem;
`)

const StyledText = styled.p(props => `
  margin-bottom: 3rem;
`)

const StyledTextbox = styled.input(props => `
  background-color: ${properties.COLOR.GRAY_LIGHT};
  border:solid ${properties.COLOR.GRAY};
  border-radius: 0;
  border-width: 0 0 3px 0;
  display: block;
  font-size: ${properties.FONT.SIZE_M};
  padding: 1rem 1rem;
  width: 100%;
`)

const StyledTextarea = styled.textarea(props => `
  background-color: ${properties.COLOR.GRAY_LIGHT};
  border:solid ${properties.COLOR.GRAY};
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
  background-color: ${properties.THEME_COLOR.MAIN};
  border: none;
  color: ${properties.COLOR.WHITE};
  cursor: pointer;
  font-size: ${properties.FONT.SIZE_S};
  padding: ${properties.BUTTON.SIZE_M};
  transition: all .3s;
  :hover {
    background-color: ${properties.COLOR.BLUE_DARK};
  }
`)

export default ContactSection
 