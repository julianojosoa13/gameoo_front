import React from 'react';
import styled from 'styled-components';
import TypeWriteText from '../TypeWriteText';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props=> props.theme.text};
`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
background-color: lightblue;

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

const Home = () => {
  return (
    <Section>
      <Container>
        <Box> <TypeWriteText /> </Box>
        <Box> <h1>video</h1> </Box>

      </Container>
    </Section>
  )
}

export default Home
