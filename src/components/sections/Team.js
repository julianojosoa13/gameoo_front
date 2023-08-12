import React from 'react';

import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead-4.svg';
import img2 from '../../assets/Nfts/bighead.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-5.svg';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props=>props.theme.text};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props=> props.theme.body};
display: flex;
justify-content: center;
align-self: flex-start;
margin: 1rem auto;
border-bottom: 2px solid ${props=> props.theme.body};
width: fit-content;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props=> props.theme.text};
margin: 2rem 1rem;
position: relative;

border: 2px solid ${props=> props.theme.body};
border-radius: 20px;
transition: all 0.3s ease;


`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props=> props.theme.carouselColor};
display: flex;
border-radius: 20px;
border: 1px solid ${props=> props.theme.body};

padding: 1rem;

cursor: pointer;

img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}

&:hover{
  img {
    transform: translateY(-2rem) scale(1.2);
  }
}
`

const Name = styled.h2`
font-size: ${props=>props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props=>props.theme.body};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props=>props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props=>`rgba(${props.theme.bodyRgba},0.9)`};
text-align: center;
font-weight: 400;
`

const MemberComponent = ({img, name=" ", position= " "}) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}
const Team = () => {
  return (
    <Section>
      <Title>Notre Equipe</Title>
      <Container>
        <MemberComponent img={img1} name='Juliano Josoa' position='Développeur Mobile / Web' />
        <MemberComponent img={img2} name='Miarana Dewa' position='SALES and MARKETING MANAGER' />
        <MemberComponent img={img3} name='Koloia Lalatian' position='BUSINESS DEVELOPPER' />
        <MemberComponent img={img4} name='Solofoniaina Luc' position='RÉVISEUR / AUDIT FINANCIER' />
      </Container>
    </Section>
  )
}

export default Team
