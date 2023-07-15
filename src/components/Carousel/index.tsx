'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Island from '../../assets/img/slide/island.png';
import Quest1 from '../../assets/img/slide/quest.png';
import Craft from '../../assets/img/slide/craft.png';
import Quest2 from '../../assets/img/slide/bossfight.png';
import Arena from '../../assets/img/slide/arena.png';
import Training from '../../assets/img/slide/training.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

export default function Carousel(){
 
  return(
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        navigation={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className="select-none relative"
      >
        <SwiperSlide>
            <Image
              className="w-slide-img cursor-pointer"
              src={Island}
              alt='Island'
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-slide-img cursor-pointer"           
            src={Quest1}
            alt='Quest-1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-slide-img cursor-pointer"
            src={Craft}
            alt='Craft'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-slide-img cursor-pointer"
            src={Quest2}
            alt='Quest-2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-slide-img cursor-pointer"
            src={Arena}
            alt='Arena'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-slide-img cursor-pointer"
            src={Training}
            alt='Training'
          />
        </SwiperSlide>
      
      </Swiper>
    </>
  )
}