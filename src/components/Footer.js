import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'


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

const Footer = () => {
  return (
    <Section>
      <Banner />
    </Section>
  )
}

export default Footer
