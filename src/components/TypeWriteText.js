import React from 'react'
import styled from 'styled-components'

import Typewriter from 'typewriter-effect'
import Button from './Button'

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props=> props.theme.text};
align-self: flex-start;

span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}

.text-1 {
    color: blue;
}
.text-2 {
    color: orange;
}
.text-3 {
    color: red;
}
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`

const TypeWriteText = () => {
  return (
    <>
        <Title>
        Découvrez de nouvelles façons
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
            
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">de Communiquer.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">d\'Engager.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">de Fidéliser vos clients.</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
        />
        </Title>
        <SubTitle>Convaincu? Commencez votre campagne marketing maintenant!</SubTitle>
        <ButtonContainer>
            <Button text='Commencer!' link='#about'/>
        </ButtonContainer>
    </>
  )
}

export default TypeWriteText
