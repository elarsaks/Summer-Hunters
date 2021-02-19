import styled from 'styled-components'
import * as React from 'react'

const ButtonWrapper = styled.div`
  position: absolute;
  margin-left: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 290px;
  font-size: 50px;
  font-weight: 400;
  z-index: 0;
`

interface ButtonProps {
  isActive: boolean
}

const SliderButton = styled.div<ButtonProps>`
  color: ${(props) => (props.isActive ? 'black' : 'gray')};
  margin-top: -20px;
  ${ButtonWrapper}:hover & {
    cursor: pointer;
  }
`

interface SliderButtonsProps {
  sliderPosition: number
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ sliderPosition }) => {
  return (
    <ButtonWrapper>
      <SliderButton
        isActive={sliderPosition < 0}
        onClick={() => /* moveCarousel('left') */ {}}
      >
        {'<'}
      </SliderButton>
      <SliderButton
        isActive={sliderPosition > -3150}
        onClick={() => /* moveCarousel('right') */ {}}
      >
        {'>'}
      </SliderButton>
    </ButtonWrapper>
  )
}

export default SliderButtons
