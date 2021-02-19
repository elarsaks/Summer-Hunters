import styled from 'styled-components'
import * as React from 'react'
import { useState } from 'react'
import SliderButtons from './helpers/SliderButtons'
import { HeroCard } from '../../components/HeroCard'

const SliderOuterContainer = styled.div`
  position: relative;
  padding: 5px;
  overflow: hidden;
  max-width: 1070px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1100px) {
    max-width: 350px;
  }
  @media (max-width: 400px) {
    margin-left: -25px;
  }
`
interface SliderInnerContainerProps {
  background: string
  marginLeft: string
}

const SliderInnerContainer = styled.div<SliderInnerContainerProps>`
  margin-left: ${(p) => p.marginLeft};
  display: flex;
  width: 1750px;
  padding-top: 50px;
  padding-bottom: 50px;
  transition: 0.4s;
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
  // Slider State
  const [heroIndex, setHeroIndex] = useState<Array<number>>([0, 1, 2, 0, 1])
  const [sliderPosition, setSliderPosition] = useState<number>(0)

  // State for mobile touches
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)

  function moveCarousel(direction: string): void {
    let newHeroIndex: number[] = heroIndex

    function moveLeft() {
      setSliderPosition(sliderPosition + 350)
    }

    // Adds a new index into array, so that a new HeroCard component will be created.
    // It is a bad solution, but I dont know how to implement circular array
    function moveRight() {
      setSliderPosition(sliderPosition - 350)
      let next: number =
        newHeroIndex[newHeroIndex.length - 1] == 2
          ? 0
          : newHeroIndex[newHeroIndex.length - 1] + 1

      newHeroIndex.push(next)
    }

    if (direction === 'left' && sliderPosition < 0) {
      moveLeft()
    } else if (direction === 'right' && sliderPosition > -2100) {
      moveRight()
    }

    setHeroIndex(newHeroIndex)
  }

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX)
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      moveCarousel('right')
    }

    if (touchStart - touchEnd < -150) {
      moveCarousel('left')
    }
  }

  return (
    <div>
      <SliderButtons
        sliderPosition={sliderPosition}
        moveCarousel={moveCarousel}
      />
      <SliderOuterContainer>
        <SliderInnerContainer
          background='blue'
          marginLeft={sliderPosition + 'px'}
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
        >
          {heroIndex.map((heroIndex, index) => (
            <HeroCard key={index} {...heroes.heroes[heroIndex]} />
          ))}
        </SliderInnerContainer>
      </SliderOuterContainer>
    </div>
  )
}

export default Slider
