import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/effect-creative';

import { Pagination, Navigation, Autoplay, EffectCards } from 'swiper/modules';

import beginnerPlan from '../assets/beginner-plan.png';
import mediumPlan from '../assets/medium-plan.png';
import proPlan from '../assets/pro-plan.png';
import masterPlan from '../assets/master-plan.png';

import Arrow from '../assets/Arrow.svg'
 
const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
   background-color: ${props => props.theme.carouselColor};
   border-radius: 20px;

   display: flex;
   justify-content: center;
   align-items: center;
}

.swiper-button-next {
    color: ${props=> props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
        display: none;
    }
}

.swiper-button-prev {
    color: ${props=> props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
        display: none;
    }
}



.img-plan {
    height: 85%;
}
`

const Carrousel = () => {
  return (
    <Container>
       <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        effect={'cards'}
        grabCursor={true}
        scrollbar={{
            draggable: true,
        }}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={beginnerPlan} alt='Tarif Débutant' className='img-plan' /> </SwiperSlide>
        <SwiperSlide> <img src={mediumPlan} alt='Tarif Moyen' className='img-plan' /> </SwiperSlide>
        <SwiperSlide> <img src={proPlan} alt='Tarif Pro' className='img-plan' /> </SwiperSlide>
        <SwiperSlide> <img src={masterPlan} alt='Tarif Master' className='img-plan' /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carrousel
