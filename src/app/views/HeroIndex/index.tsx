import * as React from 'react'
import { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

import { TopBar } from '../../components/TopBar'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { HeroCard } from '../../components/HeroCard'

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      attributes {
        strength
        intelligence
        stamina
        healthpoints
        mana
        agility
        speed
        resistance
        weakness
      }
      skills {
        name
        damage
        element
      }
    }
  }
`

interface IHeroIndexProps {}

const HeroCardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  max-width: 1050px;
  overflow: hidden;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  margin-left: 5vw;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin-top: 290px;
  font-size: 50px;
  font-weight: 400;
  z-index: 0;
`

interface SliderButtonProps {
  isActive: boolean
}

const CarouselButton = styled.div<SliderButtonProps>`
  color: ${(props) => (props.isActive ? 'black' : 'gray')};
  margin-top: -20px;
  ${ButtonWrapper}:hover & {
    cursor: pointer;
  }
`

interface SliderProps {
  background: string
  marginLeft: string
}

const Slider = styled.div<SliderProps>`
  margin-left: ${(p) => p.marginLeft};
  display: flex;
  width: 1750px;
  padding-top: 50px;
  padding-bottom: 50px;
  transition: 0.4s;
`

const handleLoading = () => <div>Loading...</div>

const handleError = (message: string) => <div>Error! {message}</div>

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const { data, error, loading } = useQuery(HEROES_QUERY)

  // Create a separate state for carousel
  const [heroIndex, setHeroIndex] = useState<Array<number>>([
    0,
    1,
    2,
    0,
    1,
    2,
    0,
    1,
    2,
  ])
  const [sliderPosition, setSliderPosition] = useState<number>(-2100)

  if (error) {
    return handleError(error.message)
  }

  if (loading) {
    return handleLoading()
  }

  // TODO: clean up this madness
  function moveCarousel(direction: string): void {
    let newHeroIndex: number[] = heroIndex

    function moveLeft() {
      setSliderPosition(sliderPosition + 350)
      let next: number = newHeroIndex[0] == 0 ? 2 : newHeroIndex[0] - 1
      newHeroIndex.unshift(next)
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
    <main>
      <TopBar />
      <Hero />

      <ButtonWrapper>
        <CarouselButton
          isActive={sliderPosition < 0}
          onClick={() => moveCarousel('left')}
        >
          {'<'}
        </CarouselButton>
        <CarouselButton
          isActive={sliderPosition > -3150}
          onClick={() => moveCarousel('right')}
        >
          {'>'}
        </CarouselButton>
      </ButtonWrapper>

      <HeroCardContainer>
        <Slider background='blue' marginLeft={sliderPosition + 'px'}>
          {heroIndex.map((heroIndex, index) => (
            <HeroCard key={index} {...data.heroes[heroIndex]} />
          ))}
        </Slider>
      </HeroCardContainer>
      <Footer />
    </main>
  )
}
