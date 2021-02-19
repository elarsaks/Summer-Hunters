import styled from 'styled-components'
import * as React from 'react'
import { useState } from 'react'
import Front from './Front'
import Back from './Back'

const CardWrapper = styled.div`
  display: inline-block;
  margin-left: 50px;
  margin-right: 50px;
  transition: 0.4s;
  z-index: 99;
`

const Card = styled.div`
  &.flipped {
    & > div:first-of-type {
      // Front side of the card
      backface-visibility: hidden;
      transform: perspective(1000px) rotateY(-180deg);
      transform-style: preserve-3d;
      transition: all 0.7s linear;
    }

    & > div:last-of-type {
      // Back side of the card
      transform: perspective(1000px) rotateY(0deg);
      transform-style: preserve-3d;
      transition: all 0.7s linear;
    }
  }
`

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  backStory: string
  skills: [
    {
      name: string
      damage: number
      element: string
    }
  ]
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  attributes,
  backStory,
  description,
  imgUrl,
  name,
  skills,
}) => {
  const [renderAttributes, setRenderAttributes] = useState<boolean>(false)

  function flipCard(Event) {
    Event.currentTarget.classList.toggle('flipped')

    // TODO: Better way to handle loading bars
    if (renderAttributes) {
      setTimeout(() => {
        setRenderAttributes(!renderAttributes)
      }, 300)
    } else {
      setRenderAttributes(!renderAttributes)
    }
  }

  return (
    <CardWrapper>
      <Card onClick={flipCard}>
        <Front name={name} imgUrl={imgUrl} description={description} />
        <Back
          renderAttributes={renderAttributes}
          attributes={attributes}
          skills={skills}
          backStory={backStory}
        />
      </Card>
    </CardWrapper>
  )
}
