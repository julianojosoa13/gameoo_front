import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carrousel from '../Carrousel'
import Button from '../Button'
import { dark, light } from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props=> props.theme.text};
/* color: ${props=> props.theme.body}; */
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
min-height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props=> props.theme.body};
align-self: flex-start;

margin: 0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props=> props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
`
const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box><Carrousel /></Box>
        <Box>
          <Title>
            C'est quoi <i>gamification</i>?  
          </Title>
          <SubText>
            Un service qui rejoint le neuromarketing et
            l'adéquation technologique pour que le client
            connaisse, aime et s'engage d'avantage
            avec la marque/l'enseigne. La gamification
            crée un lien de viralité pour la marque tout
            en renforçant l’experience client grâce aux
            interactions et sentiment d’appartenance que
            l’utilisateur développe.  
          </SubText> 
          <SubTextLight>
            Créer l’engouement autour des consommateurs/des
            clients grâce à une application hybride qui augmente
            l'interactivité avec les clients, et donc la fidélité des
            clients
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button link='#' text='Créer un compte' />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About
