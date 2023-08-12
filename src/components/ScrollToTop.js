import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Up = styled.div`
width: 3rem;
height: 3rem;
box-sizing: border-box;
margin: 0;
padding: 0;
color: ${props=>props.theme.text};
background-color: ${props=>props.theme.body};

font-size: ${props=>props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;

cursor: pointer;
display: flex;

justify-content: center;
align-items: center;

border-radius: 50%;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.2);
}

&:active{
    transform: scale(0.9);
}
`

const ScrollToTop = () => {

const scrollToTop = () => {
    let element = document.getElementById("home")

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
  }

  const ref = useRef(null)

  const {y} = useWindowScroll();
  
  useLayoutEffect(()=>{
    if (y > 200) {
        ref.current.style.display = "flex"
    } else {
        ref.current.style.display = "none"
    }
  },[y])

  return (
    <Up ref={ref} onClick={scrollToTop}>
      &#x2191;
    </Up>
  )
}

export default ScrollToTop
