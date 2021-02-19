import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

import { TopBar } from '../../components/TopBar'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
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
      <Slider heroes={data.heroes} />
      <Footer />
    </main>
  )
}
