import React, {useState} from 'react'
import styled from 'styled-components'

import properties from '../_settings/_properties'

const DoubleSidedCard = ({children, ...props}) => {
  const [isBackside, setIsBackside] = useState(false)
  let animName0, animName1
  if (isBackside) {
    animName0 = "show"
    animName1 = "hide"
  } else {
    animName0 = "hide"
    animName1 = "show"
  }
  const handleClick = (e) => {   
    setIsBackside(!isBackside)
  }
  return (
    <StyledDoubleSidedCard {...props}>
      <StyledDoubleSidedCardInner animName={animName0} animDuration={props.animDuration} {...props} onClick={e => handleClick(e)}>
          {children[0]}
      </StyledDoubleSidedCardInner>
      <StyledDoubleSidedCardInner animName={animName1} animDuration={props.animDuration} {...props} onClick={e => handleClick(e)}>
          {children[1]}
      </StyledDoubleSidedCardInner>
    </StyledDoubleSidedCard>
  )
}

const StyledDoubleSidedCardInner = styled.div(props => `
  animation: ${props.animDuration || .5}s linear 0s 1 normal forwards running ${props.animName};
  backface-visibility: hidden;
  background: ${props.background || properties.COLOR.WHITE};
  border: solid 1px #d1d3d3;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @keyframes show {
    0% {
      transform: rotateY(-180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  @keyframes hide {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`)

const StyledDoubleSidedCard = styled.div(props => `
  cursor: pointer;
  height: auto;
  margin: ${props.margin || 0};
  padding: 0 0 calc(${props.styleHeight || "100%"} + 5rem)};
  perspective: 5000px;
  position: relative;
  width: ${props.styleWidth || "100%"};
  }
`)


export default DoubleSidedCard