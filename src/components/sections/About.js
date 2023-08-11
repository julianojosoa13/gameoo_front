import React from 'react'
import styled from 'styled-components'
import Carrousel from '../Carrousel'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props=> props.theme.text};
color: ${props=> props.theme.body};
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

const About = () => {
  return (
    <Section>
      <Container>
        <Box><Carrousel /></Box>
        <Box>Text</Box>
      </Container>
    </Section>
  )
}

export default About
