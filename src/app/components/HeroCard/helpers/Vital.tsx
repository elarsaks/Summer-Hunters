import styled from 'styled-components'
import * as React from 'react'
import Attribute from './Attribute'

const VitalContainer = styled.div`
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

interface VitalProps {
  renderAttributes
  vital: {
    healthpoints: number
    mana: number
    resistance: string
    weakness: string
  }
}
const Vital: React.FC<VitalProps> = ({ renderAttributes, vital }) => {
  return (
    <VitalContainer>
      <Attribute
        attribute={'Healthpoints'}
        renderAttributes={renderAttributes}
        value={vital.healthpoints}
      />
      <Attribute
        attribute={'Mana'}
        renderAttributes={renderAttributes}
        value={vital.mana}
      />
      <Text>
        Resistance: <a>{vital.resistance.toUpperCase()}</a>
      </Text>
      <Text>
        Weakness: <a>{vital.weakness.toUpperCase()}</a>
      </Text>
    </VitalContainer>
  )
}

export default Vital
