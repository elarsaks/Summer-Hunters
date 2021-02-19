import styled from 'styled-components'
import * as React from 'react'

const ButtonWrapper = styled.div`
  overflow: hidden;
  font-size: 50px;
  font-weight: 400;
  z-index: 9;
  left: 0;
  right: 0;
  position: absolute;
  margin-top: 290px;
  margin-left: auto;
  margin-right: auto;
  width: 81vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    width: 98vw;
  }
  @media (max-width: 500px) {
    display: none;
  }
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
  moveCarousel(direction: string): void
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  sliderPosition,
  moveCarousel,
}) => {
  return (
    <ButtonWrapper>
      <SliderButton
        isActive={sliderPosition < 0}
        onClick={() => moveCarousel('left')}
      >
        {'<'}
      </SliderButton>
      <SliderButton
        isActive={sliderPosition > -2100}
        onClick={() => moveCarousel('right')}
      >
        {'>'}
      </SliderButton>
    </ButtonWrapper>
  )
}

export default SliderButtons
