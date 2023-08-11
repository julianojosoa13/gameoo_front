import React from 'react'
import styled from 'styled-components'

import Typewriter from 'typewriter-effect'

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props=> props.theme.text};
align-self: flex-start;
`

const TypeWriteText = () => {
  return (
    <Title>
      Découvrez de nouvelles façons
      <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        
        onInit={(typewriter) => {
            typewriter.typeString('de Communiquer.')
            .pauseFor(2000)
            .deleteAll()
            .typeString('d\'Engager.')
            .pauseFor(2000)
            .deleteAll()
            .typeString('de Fidéliser vos clients.')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
  )
}

export default TypeWriteText
