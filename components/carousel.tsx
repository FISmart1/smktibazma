import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";

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

export default function Carousel({ slides }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full h-[970px]">
      {/* Swiper hanya untuk gambar */}
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        pagination={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, EffectFade]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Konten teks */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-16">
          <div className="text-white max-w space-y-4">
            <h1 className="text-sm md:text-5xl font-bold tracking-wide uppercase">
              {slides[activeIndex].heading}
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-[800px]">
              {slides[activeIndex].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation bawah (seperti di Pertamina) */}
      <div className="absolute bottom-10 left-0 right-0 flex gap-8 z-20 mx-auto w-full max-w-[1170px]">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`text-sm md:text-light font-medium uppercase tracking-wide transition-all duration-300 ${
              activeIndex === index
                ? "text-white border-b-2 border-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {slide.heading}
          </button>
        ))}
      </div>
    </div>
  );
}
