import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardHeader, CardFooter, Button, Image } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const CarouselAsrama: React.FC = () => {
  const asrama = [
    {
      categories: "Asrama",
      title: "Tempat Cuci",
      img: "/fasilitas/asrama/laundry.avif",
    },
    {
      categories: "Asrama",
      title: "Ruang Dapur",
      img: "/fasilitas/asrama/kitchen.avif",
    },
    {
      categories: "Asrama",
      title: "Kamar Mandi",
      img: "/fasilitas/asrama/kamar-mandi.avif",
    },
    {
      categories: "Asrama",
      title: "Tempat Tidur",
      img: "/fasilitas/asrama/bed.avif",
    },
    {
      categories: "Asrama",
      title: "Loker Siswa",
      img: "/fasilitas/asrama/cupboard.avif",
    },
    {
      categories: "Asrama",
      title: "Barber Shop",
      img: "/fasilitas/asrama/barbershop.avif",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1} // Set default for mobile
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 }, // For small screens
          768: { slidesPerView: 3 }, // For tablets
          1024: { slidesPerView: 4 }, // For desktops
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {asrama.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {item.categories}
                </p>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item.img}
              />
              <CardFooter className="absolute bg-gray-500/50 bottom-0 border-t-1 border-zinc-100/30 z-10 justify-between">
                <div>
                  <p className="text-white text-tiny">Available.</p>
                </div>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
const CarouselSekolah: React.FC = () => {
  const sekolah = [
    {
      categories: "Sekolah",
      title: "Gedung Asrama",
      img: "https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg",

    },
    {
      categories: "Sekolah",
      title: "Masjid & Aula",
      img: "https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg",

    },
    {
      categories: "Sekolah",
      title: "Ruang Kelas & Lab",
      img: "https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg",

    },
    {
      categories: "Sekolah",
      title: "Lapangan Olahraga",
      img: "https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg",

    },
  ];


  return (
    <>
      <Swiper
        slidesPerView={1} // Set default for mobile
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 }, // For small screens
          768: { slidesPerView: 3 }, // For tablets
          1024: { slidesPerView: 4 }, // For desktops
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {sekolah.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {item.categories}
                </p>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item.img}
              />
              <CardFooter className="absolute bg-gray-500/50 bottom-0 border-t-1 border-zinc-100/30 z-10 justify-between">
                <div>
                  <p className="text-white text-tiny">Available.</p>
                </div>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { CarouselAsrama, CarouselSekolah };
