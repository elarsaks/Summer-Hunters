import styled from 'styled-components'
import * as React from 'react'
import { keyframes } from 'styled-components'

const AttributeContainer = styled.div``

const AttributeBarContainer = styled.div`
  border: 1px solid white;
  width: 100%;
`

interface AttributeBarProps {
  value: number
}

const loadBar = (width) => keyframes`
 0% { width: 0%; background: hsl(0, 98%, 50%); }
 100% { width: ${width}%; background: hsl(${width}, 98%, 50%);}
`

const AttributeBar = styled.div<AttributeBarProps>`
  height: 10px;
  color: black;
  padding: 0;
  animation-name: ${loadBar((p) => p.value)};
  width: ${(p) => p.value + '%'};
  max-width: ${(p) => p.value + '%'};
  animation-duration: 10s;
  background: hsl(${(p) => p.value}, 98%, 50%);
`

interface AttributeProps {
  attribute: string
  value: number
}
const Attribute: React.FC<AttributeProps> = ({ attribute, value }) => {
  return (
    <AttributeContainer>
      {attribute} {value + '/100'}
      <AttributeBarContainer>
        <AttributeBar value={value} />
      </AttributeBarContainer>
    </AttributeContainer>
  )
}

export default Attribute
