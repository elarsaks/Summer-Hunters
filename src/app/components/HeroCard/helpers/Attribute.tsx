import styled from 'styled-components'
import * as React from 'react'
import { keyframes } from 'styled-components'

const AttributeContainer = styled.div``

const AttributeBarContainer = styled.div`
  border: 1px solid white;
  width: 100%;
  margin-bottom: 5px;
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
  max-width: 100%;
  animation-duration: 2s;
  background: hsl(${(p) => p.value}, 98%, 50%);
`

interface AttributeProps {
  attribute: string
  value: number
  renderAttributes: boolean
}
const Attribute: React.FC<AttributeProps> = ({
  attribute,
  value,
  renderAttributes,
}) => {
  const maxAttributes = (value: number): number =>
    Math.pow(10, Math.ceil(Math.log10(value)))

  return (
    <AttributeContainer>
      {`${attribute.toUpperCase()}: ${value} / ${maxAttributes(value)}`}
      <AttributeBarContainer>
        {renderAttributes && (
          <AttributeBar value={value > 100 ? value / 10 : value} />
        )}
      </AttributeBarContainer>
    </AttributeContainer>
  )
}

export default Attribute
