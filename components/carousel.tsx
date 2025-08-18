import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import BlurFade from './magicui/blur-fade';

interface Slide {
    img: string;
    heading: string;
    desc: string; // Add description field
}

interface CarouselProps {
    slides: Slide[],

}

export function CarouselProgram({ slides }: CarouselProps) {
    return (
        <div className='w-full h-[768px]'>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-full'>
                            <div className='absolute inset-0'>
                                <img
                                    src={slide.img}
                                    alt="coba"
                                    className='w-full h-full object-cover object-center'
                                />
                            </div>

                            <div className='absolute inset-y-0 left-0 w-full bg-gradient-to-tr from-blue-800 to-transparent'></div>

                            <div className='relative z-10 w-full flex items-end h-full'>
                                <div className='text-white w-full flex flex-col mx-auto my-auto px-4 max-w-7xl items-start mb-16'>
                                    <div className='w-full md:w-1/2 '>
                                        <BlurFade delay={0.25} inView>
                                            <h1 className='text-3xl lg:text-6xl font-black leading-tight lg:leading-[64px] uppercase'>
                                                {slide.heading}
                                            </h1>
                                        </BlurFade>
                                    </div>
                                    <div className='w-full md:w-1/2 mt-4 md:mt-0 md:ml-6'>
                                        <BlurFade delay={0.25} inView>

                                            <p className='text-xl'>
                                                {slide.desc ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                                            </p>
                                        </BlurFade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

// New Carousel component with props
export default function Carousel({ slides }: CarouselProps) {
  return (
    <div className="relative w-full h-[850px]">
      {/* Swiper hanya untuk gambar */}
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]} // 🚫 Navigation dihapus
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Overlay gradient supaya teks tetap jelas */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tulisan tetap di tengah, tidak ikut loop */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <div className="text-white">
          <h3 className="text-md md:text-2xl font-semibold tracking-wide">
            ISLAMIC BOARDING SCHOOL
          </h3>
          <h1 className="text-3xl md:text-7xl font-black mt-2">
            SMK TI BAZMA
          </h1>
          <p className="text-md md:text-xl mt-4">
            Energi Masa Depan Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}
