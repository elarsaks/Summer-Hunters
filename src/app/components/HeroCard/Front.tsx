import styled from 'styled-components'
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
`

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
      <Image src={imgUrl} />

      <CardTextContainer>
        <h4>{name}</h4>
        {description}
      </CardTextContainer>
    </FrontSide>
  )
}

export default Front
