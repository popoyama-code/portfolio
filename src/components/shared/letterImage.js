import React from 'react'
import styled from 'styled-components'

import properties from '../_settings/_properties'

const LetterImage = ({...props}) => {
  return (
    <StyledImageWrap {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        data-name="letter-image"
        viewBox="0 0 259.26 195.75"
      >
        <path
          fill="#75adde"
          d="M86.04 5.68L46.71 16.22 1.82 85.39 75.28 122.86 114.61 112.32 161.4 42.64 86.04 5.68z"
          className="svg-elem-1 svg_reveal"
        ></path>
        <g className="line-group svg_reveal">
          <path
            fill="none"
            stroke="#41416e"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M189.48 149.66L29.42 192.54 1.82 85.64 161.88 42.76 189.48 149.66z"
            className="svg-elem-2"
          ></path>
          <path
            fill="none"
            stroke="#41416e"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M1.82 85.65l73.46 37.51-45.86 69.44"
            className="svg-elem-3"
          ></path>
          <path
            fill="none"
            stroke="#41416e"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M189.04 149.78l-74.43-37.2L159.5 43.4"
            className="svg-elem-4"
          ></path>
          <path
            fill="none"
            stroke="#231815"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M75.28 123.11L114.61 112.57"
            className="svg-elem-5"
          ></path>
          <path
            fill="#fff"
            stroke="#41416e"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M114.61 112.57L75.28 123.11 29.87 99.95 13.63 39.33 126.12 9.19 142.36 69.81 114.61 112.57z"
            className="svg-elem-6"
          ></path>
          <path
            fill="none"
            stroke="#7870a2"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M75.76 46.22L33.67 57.51m4.9 18.3l84.26-22.57M43.26 93.32l84.26-22.57"
            className="svg-elem-7"
          ></path>
          <path
            fill="#fff"
            stroke="#41416e"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M257.67 5.09l-29.14 149.6a3 3 0 01-3.66 2.34l-1.68-.41-2.69 22.42-11.64 13.51-4.09-17.39 7.9-21.1-1.69-.41a3 3 0 01-2.17-3.76l43-146.22a3.015 3.015 0 015.86 1.42zm-48.79 187.46l4-16.37"
            className="svg-elem-8"
          ></path>
        </g>
      </svg>
    </StyledImageWrap>
  )
}

const StyledImageWrap = styled.div(props => `
  display: none;
  height: ${props.styleHeight};
  width: ${props.styleWidth};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  @media screen and (${properties.MEDIA.NOT_SP}) {
    display: block;
  }

  .svg-elem-1 {
    fill: transparent;
    animation: color 2.5s ease-in;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
    animation-play-state:  paused;
  }

  
  @keyframes color {
    from {
      fill: transparent;
    }
    to {
      fill: #75adde;
    }
  }

  .line-group {
    animation: line 5s ease-in;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
    animation-play-state:  paused;
  }

  @keyframes line {
    from {
      stroke-dasharray: 2000px;
      stroke-dashoffset: 2000px;
    }
    to {
      stroke-dashoffset: 0;
    }
  }



`)

export default LetterImage



 