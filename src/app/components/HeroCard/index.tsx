import styled from 'styled-components'
import { keyframes } from 'styled-components'
import * as React from 'react'

const fadeInOut = keyframes`
 0% { opacity: 0.2; }
 100% { opacity: 1; }
`

const CardWrapper = styled.div`
  display: inline-block;
  margin-left: 50px;
  margin-right: 50px;
`

const Card = styled.div`
  height: 500px;
  width: 250px;
  background: teal;
  text-align: center;
  border-radius: 15px;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
  ${CardWrapper}:hover & {
    cursor: pointer;
    box-shadow: 7px 8px 16px 7px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  border: 2px solid ${(props) => props.color};
  animation-name: ${fadeInOut};
  animation-duration: 2s;
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

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  //skills: Array<String>
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
}) => {
  return (
    <CardWrapper>
      <Card>
        <Image src={imgUrl} />

        <CardTextContainer>
          <h4>{name}</h4>
          {description}
        </CardTextContainer>
      </Card>
    </CardWrapper>
  )
}
