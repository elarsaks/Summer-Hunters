import styled from 'styled-components'
import * as React from 'react'
import { useEffect } from 'react'

const Card = styled.div`
  height: 500px;
  width: 250px;
  background: teal;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`
const Image = styled.img`
  height: 250px;
  width: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

interface IHeroCardProps {
  name: string
  imgUrl: string
  //skills: Array<String>
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl }) => {
  useEffect(() => console.log('MOunted'), [])
  return (
    <Card>
      <Image src={imgUrl} />
      <a>{name}</a>
    </Card>
  )
}
