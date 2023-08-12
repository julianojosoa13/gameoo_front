import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'


const Section = styled.section`
width: 100vw;
height: 100vh;
min-height: 100vh;
position: relative;

color: ${props=>props.theme.text};

background-color: ${props=>props.theme.body};
display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props=>props.theme.text};
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
        </Left>
      </Container>
    </Section>
  )
}

export default Footer
