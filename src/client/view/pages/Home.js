
import logo from '../../images/dandi-logo2.png'
import daegu from '../../images/daegu.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import { useContext, useState } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import main1 from '../../images/main1.png'
import main2 from '../../images/main2.png'
import main3 from '../../images/main3.jpg'
import main4 from '../../images/main4.png'
import main5 from '../../images/main5.png'
import main6 from '../../images/main6.png'
import FloatingButton from '../components/Button'
import Navbar from '../components/Navbar';
import {Autoplay, FreeMode, Pagination } from "swiper";
import '../../css/Home.css'



function Home() {



    return (
        <>
        <div id='home'>
            <div id="homeTitle">
                <p><img id="logo" src={logo}/>와</p>
                <p>함께하는 Daegu 여행</p>
                <p>QR 사진 찍고 포인트 받으세요!</p>
            </div>
             <div id="HomeSwiperWrap">
            <Swiper id="HomeSwiper"
             spaceBetween={20}
             slidesPerView={1}
             autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
            modules={[FreeMode, Pagination, Autoplay]}>
                <SwiperSlide ><img className="slidePic" src={main1}/></SwiperSlide>
                <SwiperSlide ><img className="slidePic" src={main2}/></SwiperSlide>
                <SwiperSlide ><img className="slidePic" src={main3}/></SwiperSlide>
                <SwiperSlide ><img className="slidePic" src={main4}/></SwiperSlide>
                <SwiperSlide ><img className="slidePic" src={main5}/></SwiperSlide>
                <SwiperSlide ><img className="slidePic" src={main6}/></SwiperSlide>
                
            </Swiper> 
            </div>

            <FloatingButton/>
            </div>
            <Navbar/>
            </>
    )
}

export default Home;