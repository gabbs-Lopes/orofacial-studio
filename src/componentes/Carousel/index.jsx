import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './Carousel.module.scss'; // Estilo CSS para o carrossel

import images from './imagens.json'
import img1 from 'assets/imgBanner/imgOro1.jpg'
import img2 from 'assets/imgBanner/imgOro2.jpg'
import img3 from 'assets/imgBanner/imgOro3.jpg'
import img4 from 'assets/imgBanner/imgOro4.jpg'

export default function Carousel() {

    const navigationStyles = {
        width: '50px', // Define a largura das setas
        height: '50px', // Define a altura das setas
        backgroundColor: 'transparent',
        color: '#FFFFFF71',
        fontSize: '30px' // Define o tamanho do ícone das setas
    };

    return (
        <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            /* pagination={{ clickable: true }} */
            /* scrollbar={{ draggable: false }} */
            autoplay={{ delay: 3000 }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            <SwiperSlide><img className={styles.swiper__img} src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide><img className={styles.swiper__img} src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide><img className={styles.swiper__img} src={img3} alt="img3" /></SwiperSlide>
            <SwiperSlide><img className={styles.swiper__img} src={img4} alt="img4" /></SwiperSlide>

            <div className="swiper-button-prev" style={navigationStyles}></div>
            <div className="swiper-button-next" style={navigationStyles}></div>
        </Swiper>
    );
};