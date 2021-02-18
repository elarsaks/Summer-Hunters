import styled from 'styled-components'
import * as React from 'react'
import Attribute from './Attribute'

const SkillContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  & > a {
    color: yellow;
  }
`

interface SkillProps {
  renderAttributes
  skill: {
    name: string
    damage: number
    element: string
  }
}
const Skill: React.FC<SkillProps> = ({ renderAttributes, skill }) => {
  return (
    <SkillContainer>
      <Text>
        Name: <a>{skill.name.toUpperCase()}</a>
      </Text>
      <Text>
        Element <a>{skill.element.toUpperCase()}</a>
      </Text>
      <Attribute
        attribute='damage'
        renderAttributes={renderAttributes}
        value={skill.damage}
      />
    </SkillContainer>
  )
}

export default Skill
