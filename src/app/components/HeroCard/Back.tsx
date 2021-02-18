import styled from 'styled-components'
import * as React from 'react'
import Attribute from './helpers/Attribute'

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
`
const ContentContainer = styled.div`
  padding: 20px;
`

const Header = styled.div`
  text-transform: uppercase;
  font-weight: 600;
`

interface BackSideProps {
  renderAttributes: boolean
}

const Back: React.FC<BackSideProps> = ({ renderAttributes }) => {
  return (
    <BackSide>
      <ContentContainer>
        {' '}
        <Header>Skills:</Header>
        <Header>Attributes:</Header>
        {renderAttributes && <Attribute attribute='Strength' value={60} />}
      </ContentContainer>
    </BackSide>
  )
}

export default Back
