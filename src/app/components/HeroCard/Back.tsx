import styled from 'styled-components'
import * as React from 'react'
import Attribute from './helpers/Attribute'
import Skill from './helpers/Skill'
import Vital from './helpers/Vital'

const BackSide = styled.div`
  position: absolute;
  margin-top: -500px;
  margin-left: 0;
  background: rgba(0, 17, 71, 1);
  width: 250px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  backface-visibility: hidden;
  transition: all 0.7s ease-in-out;
  transform: rotateY(-180deg);
  color: #fff;
  border: 2px solid #fcfc03;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: content-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  cursor: pointer;
`
const ContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`

const Header = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid white;
  margin-bottom: 7px;
  margin-top: 20px;
  letter-spacing: 5px;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  & > a {
    color: yellow;
  }
`

interface BackSideProps {
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
  renderAttributes: boolean
  skills: [
    {
      name: string
      damage: number
      element: string
    }
  ]
}

const Back: React.FC<BackSideProps> = ({
  attributes,
  backStory,
  renderAttributes,
  skills,
}) => {
  function createAttributesList() {
    let attributesList: any = []
    let wantedAttributes: string[] = [
      'strength',
      'intelligence',
      'stamina',
      'agility',
      'speed',
    ]

    for (const [key, value] of Object.entries(attributes)) {
      const wanted = wantedAttributes.find((attr) => attr == key)

      if (wanted && typeof value == 'number') {
        attributesList.push(
          <Attribute
            attribute={key}
            renderAttributes={renderAttributes}
            value={value}
            key={key}
          />
        )
      }
    }
    return attributesList
  }

  return (
    <BackSide>
      <ContentContainer>
        <Header>Vitals</Header>
        <Vital
          renderAttributes={renderAttributes}
          vital={{
            healthpoints: attributes.healthpoints,
            mana: attributes.mana,
            resistance: attributes.resistance,
            weakness: attributes.weakness,
          }}
        />

        <Header>Attributes</Header>
        {createAttributesList()}

        <Header>Skills</Header>
        {skills.map((skill) => {
          return (
            <Skill
              key={skill.name}
              skill={skill}
              renderAttributes={renderAttributes}
            />
          )
        })}

        <Header>BackStory</Header>
        <Text>{backStory}</Text>
      </ContentContainer>
    </BackSide>
  )
}

export default Back
