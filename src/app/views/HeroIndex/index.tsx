import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
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

const HeroCardContainer = styled.div`
  display: flex;
  padding: 50px;
  align-self: center;
  max-width: 1150px;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const CarouselButton = styled.div`
  background: blue;
  height: 50px;
  width: 50px;
  margin-top: 20%;
`
interface IHeroIndexProps {}

interface IHero {
  name: string
  imgUrl: string
}

const handleLoading = () => <div>Loading...</div>

const handleError = (message: string) => <div>Error! {message}</div>

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const { data, error, loading } = useQuery(HEROES_QUERY)

  // Create a separate state for carousel
  const [heroIndex, setHeroIndex] = useState<Array<number>>([0, 1, 2])

  if (error) {
    return handleError(error.message)
  }

  if (loading) {
    return handleLoading()
  }

  function moveCarousel(direction: string): void {
    let newHeroIndex: number[] = heroIndex

    if (direction === 'right') {
      newHeroIndex = heroIndex.map((index) => {
        return index == data.heroes.length - 1 ? 0 : index + 1
      })
    } else {
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
      <Section
        heading={'Hunter Index'}
        paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Unfortunately he forgot to implement their HeroCards. 
          It's your job to finish his work before we can continue
          on our journey together!
        `}
      />

      {/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
      <HeroCardContainer>
        <CarouselButton onClick={() => moveCarousel('left')} />
        <HeroCard {...data.heroes[heroIndex[0]]} />
        <HeroCard {...data.heroes[heroIndex[1]]} />
        <HeroCard {...data.heroes[heroIndex[2]]} />
        <CarouselButton onClick={() => moveCarousel('right')} />
      </HeroCardContainer>

      <Footer />
    </main>
  )
}
