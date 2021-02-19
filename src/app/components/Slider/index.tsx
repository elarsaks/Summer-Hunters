import styled from 'styled-components'
import * as React from 'react'
import { useState } from 'react'
import SliderButtons from './helpers/SliderButtons'
import { HeroCard } from '../../components/HeroCard'

const SliderOuterContainer = styled.div`
  padding: 5px;
  overflow: hidden;
  width: 80vw;
`
const SliderInnerContainer = styled.div`
  display: flex;
  padding: 5px;
`

interface SliderProps {
  heroes: [
    {
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
  ]
}

const Slider: React.FC<SliderProps> = (heroes) => {
  // Create a separate state for carousel
  const [heroIndex, setHeroIndex] = useState<Array<number>>([0, 1, 2, 0, 1])
  const [sliderPosition, setSliderPosition] = useState<number>(0)

  // TODO: clean up this madness
  function moveCarousel(direction: string): void {
    let newHeroIndex: number[] = heroIndex

    function moveLeft() {
      setSliderPosition(sliderPosition + 350)
      /*
      let next: number = newHeroIndex[0] == 0 ? 2 : newHeroIndex[0] - 1 
      newHeroIndex.unshift(next)*/
    }

    function moveRight() {
      setSliderPosition(sliderPosition - 350)
      let prev: number =
        newHeroIndex[newHeroIndex.length - 1] == 2
          ? 0
          : newHeroIndex[newHeroIndex.length - 1] + 1

      newHeroIndex.push(prev)
    }

    if (direction === 'left' && sliderPosition < 0) {
      moveLeft()
    } else if (direction === 'right' && sliderPosition > -3150) {
      moveRight()
    }

    setHeroIndex(newHeroIndex)
  }

  return (
    <SliderOuterContainer>
      <SliderInnerContainer>
        <SliderButtons sliderPosition={0} />
        {heroIndex.map((heroIndex, index) => (
          <HeroCard key={index} {...heroes.heroes[heroIndex]} />
        ))}
      </SliderInnerContainer>
    </SliderOuterContainer>
  )
}

export default Slider
