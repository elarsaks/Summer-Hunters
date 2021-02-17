import * as React from 'react'
import { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

import { TopBar } from '../../components/TopBar'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
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
  max-width: 1000px;
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
`

const CarouselButton = styled.div`
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
  const [heroIndex, setHeroIndex] = useState<Array<number>>([0, 1, 2])
  const [sliderPosition, setSliderPosition] = useState<number>(-50)

  if (error) {
    return handleError(error.message)
  }

  if (loading) {
    return handleLoading()
  }

  function moveCarousel(direction: string): void {
    let newHeroIndex: number[] = heroIndex

    if (direction === 'right') {
      setSliderPosition(sliderPosition + 350)
      newHeroIndex = heroIndex.map((index) => {
        return index == data.heroes.length - 1 ? 0 : index + 1
      })
    } else {
      setSliderPosition(sliderPosition - 350)
      newHeroIndex = heroIndex.map((index) => {
        return index == 0 ? data.heroes.length - 1 : index - 1
      })
    }

    setHeroIndex(newHeroIndex)
  }

  return (
    <main>
      <TopBar />
      <Hero />
      {/** TODO: Create some header here */}

      <ButtonWrapper>
        <CarouselButton onClick={() => moveCarousel('left')}>
          {'<'}
        </CarouselButton>
        <CarouselButton onClick={() => moveCarousel('right')}>
          {'>'}
        </CarouselButton>
      </ButtonWrapper>

      <HeroCardContainer>
        <Slider background='blue' marginLeft={sliderPosition + 'px'}>
          <HeroCard {...data.heroes[heroIndex[2]]} />
          <HeroCard {...data.heroes[2]} />
          <HeroCard {...data.heroes[0]} />
          <HeroCard {...data.heroes[1]} />
          <HeroCard {...data.heroes[2]} />
          <HeroCard {...data.heroes[0]} />
          <HeroCard {...data.heroes[heroIndex[0]]} />
        </Slider>
      </HeroCardContainer>
      <Footer />
    </main>
  )
}
