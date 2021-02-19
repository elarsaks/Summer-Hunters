import styled, { keyframes } from 'styled-components'
import * as React from 'react'

const FrontSide = styled.div`
  cursor: pointer;
  background: teal;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 250px;
  height: 500px;
  text-align: center;
  backface-visibility: hidden;
  transition: all 0.7s ease-in-out;
  transform: rotateY(0deg);
  border: 2px solid;
  overflow: hidden;

  // Shine
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    top: 0;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    &::before {
      transform: translateX(300px) skewX(-15deg);
      transition: 0.7s;
    }
  }
`

const Shine = styled.div``

const Image = styled.img`
  height: 250px;
  width: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid;
`

const CardTextContainer = styled.div`
  padding: 5px;
  color: white;
`
interface FrontSideProps {
  name: string
  imgUrl: string
  description: string
}

const Front: React.FC<FrontSideProps> = ({ name, imgUrl, description }) => {
  return (
    <FrontSide>
      <Shine />
      <Image src={imgUrl} />

      <CardTextContainer>
        <h4>{name}</h4>
        {description}
      </CardTextContainer>
    </FrontSide>
  )
}

export default Front
