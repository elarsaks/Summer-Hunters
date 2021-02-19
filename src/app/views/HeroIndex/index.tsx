import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

import { TopBar } from '../../components/TopBar'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import Slider from '../../components/Slider'

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

const handleLoading = () => <div>Loading...</div>

const handleError = (message: string) => <div>Error! {message}</div>

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const { data, error, loading } = useQuery(HEROES_QUERY)

  if (error) {
    return handleError(error.message)
  }

  if (loading) {
    return handleLoading()
  }

  return (
    <main>
      <TopBar />
      <Hero />
      <Slider heroes={data.heroes} />
      <Footer />
    </main>
  )
}
