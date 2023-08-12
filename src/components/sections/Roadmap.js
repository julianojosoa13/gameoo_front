import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props=>props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props=> props.theme.text};
display: flex;
justify-content: center;
align-self: flex-start;
margin: 1rem auto;
border-bottom: 2px solid ${props=> props.theme.text};
width: fit-content;
`

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props=> props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: lightblue; */

&>*:nth-of-type(2n + 1) {
  justify-content: start;

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;
  }

  p {
    border-radius: 40px 0 40px 0;
  }
}

&>*:nth-of-type(2n) {
  justify-content: end;

  div {
    border-radius: 0 50px 0 50px;
    text-align: left;
  }

  p {
    border-radius: 0 40px 0 40px;
  }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props=>props.theme.text};
`

const Box = styled.p`
height: fit-content;
background-color: ${props=>props.theme.carouselColor};
color: ${props=>props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props=>props.theme.text};
`
const SubTitle = styled.span`
display: block;
font-size: ${props=>props.theme.fontxl};
text-transform: capitalize;
color: ${props=>props.theme.text};
`

const SubText = styled.span`
display: block;
font-size: ${props=>props.theme.fontsm};
text-transform: capitalize;
color: ${props=>props.theme.text};

font-weight: 400;
margin: 0.5rem 0;
`

const RoadmapItem = ({title, subText, addToRef}) => {

  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>
            {title}
          </SubTitle>
          <SubText>
            {subText}
          </SubText>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);


  const addToRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index)=>{

      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        }, {
          y: '-30%',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true,
          }
        }
      )

    })
    
    return () => {

    }
  }, [])

  return (
    <Section id='roadmap'>
      <Title>
        Roadmap
      </Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem addToRef={addToRef} title='Réalisé' subText='Candidature pour Miary Digital 2023 + Simulation Financement Année 1'/>
          <RoadmapItem addToRef={addToRef} title='En Cours' subText='Révision des données'/>
          <RoadmapItem addToRef={addToRef} title='En Cours' subText='Analyse financier des résultats prévisionnels'/>
          <RoadmapItem addToRef={addToRef} title='En Cours' subText='1er Prototype de l’application'/>
          <RoadmapItem addToRef={addToRef} title='2024' subText='1er Semestre : Phase de lancement - 2ème Semestre : Phase de croissance' />
          <RoadmapItem addToRef={addToRef} title='2025' subText='Amélioration des produits et services. Etudes de Marché pour Secteur des Ressources Humaines' />
          <RoadmapItem addToRef={addToRef} title='2026' subText='Développement de Marché : zone géographique élargie' />
          <RoadmapItem addToRef={addToRef} title='2027' subText='Amélioration des produits et services. Etudes de marché pour autres secteurs' />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap
