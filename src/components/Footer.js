import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";


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

const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
          <a href='http://facebook.com' target='_blank' rel='noopener'>
            <Facebook />
          </a>
          <a href='http://instagram.com' target='_blank' rel='noopener'>
            <Instagram />
          </a>
          <a href='http://linkedin.com' target='_blank' rel='noopener'>
            <LinkedIn />
          </a>
          </IconList>
        </Left>
      </Container>
    </Section>
  )
}

export default Footer
