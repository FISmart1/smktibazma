"use client";
import CardProject, { CardTest, Contact, Ppdb } from "@/components/card";
import Footer from "@/components/footer";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, Divider, Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { subtitle } from "@/components/primitives";
import ImageWithSkeleton from "@/components/image-skeleton";
import { Link } from "@nextui-org/link";
import { useState, useEffect, useRef } from "react";
import { DaftarMitra } from "./ppdb/partner";

export default function Home() {
  const cards = [
    {
      id: "siot",
      title: "SIoT",
      subtitle: "Sistem Internet of Things",
      desc: "Teknologi yang menghubungkan perangkat ke internet untuk bertukar data, otomatisasi, dan kontrol jarak jauh.",
      img: "jurusan/siot.png",
    },
    {
      id: "pkk",
      title: "PKK",
      subtitle: "Praktek Kreatif dan Kewirausahaan",
      desc: "Membekali siswa dengan keterampilan berwirausaha melalui praktik nyata, inovasi produk, dan manajemen bisnis.",
      img: "jurusan/pkk.png",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      subtitle: "Teknologi Awan",
      desc: "Pembelajaran teknologi cloud computing terbaru untuk mendukung layanan berbasis internet yang efisien dan scalable.",
      img: "jurusan/cloud.png",
    },
    {
      id: "skj",
      title: "SKJ",
      subtitle: "Sistem Komputer & Jaringan",
      desc: "Fokus pada pengelolaan jaringan komputer, keamanan, dan implementasi infrastruktur IT modern.",
      img: "jurusan/skj.png",
    },
  ];

  const [activeCard, setActiveCard] = useState(cards[0]);
  const mitraRef = useRef(null);
  useEffect(() => {
    const track = mitraRef.current;
    if (!track) return;

    let animationFrame;
    const speed = 0.15;
    const scroll = () => {
      track.scrollLeft += speed;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft -= track.scrollWidth / 2;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);


  const slidesData = [
    {
      img: "carousel/main/guru.webp",
      heading: "Energi Masa Depan Indonesia!",
      desc: "Selamat datang di SMK TI BAZMA – sekolah asrama unggulan berbasis IT dan keagamaan. Kami mendidik generasi siap digital yang berkarakter, beriman, dan berprestasi",
    },
    {
      img: "carousel/main/tasmi.webp",
      heading: `Smart in Tech, Strong in Faith`,
      desc: "Paduan istimewa antara kompetensi Teknologi Informasi (SIJA) dan ilmu agama: Fiqih, Tajwid, Akhlak, serta hafalan Al-Qur’an juz 26–30 secara mutqin.",
    },
    {
      img: "carousel/main/robotik.webp",
      heading: "Sistem, Informatika, Jaringan & Aplikasi",
      desc: "Fokus utama pada cloud computing, Internet of Things, keamanan jaringan, hingga wirausaha kreatif—siap membentuk profesional IT masa depan.",
    },
    {
      img: "carousel/main/beasiswa.webp",
      heading: "Beasiswa Penuh 100%",
      desc: "Belajar tanpa biaya untuk siswa dhuafa dari seluruh Indonesia—didukung penuh oleh wakaf dan dana sosial kemanusiaan melalui Yayasan BAZMA.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Carousel slides={slidesData} />
      <BlurFade delay={0.25 * 2} inView>
        <div className="container mx-auto my-[75px] px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="max-w-[600px] text-lg text-gray-600 text-justify">
              <h1 className="text-4xl font-bold text-blue mb-4">
                Profil Sekolah
              </h1>
              <p className="leading-relaxed">
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang bebas biaya dan
                diperuntukan untuk anak-anak tidak mampu. Pembangunan sekolah,
                baik fasilitas maupun operasional didanai dari hasil pengelolaan
                wakaf dan sumber dana sosial kemanusiaan lainnya yang
                diamanahkan oleh masyarakat.
              </p>
              <br />
              <Button
                color="primary"
                className="max-w-40 bg-blue hidden md:block rounded-sm"
              >
                <Link href="/about" className="text-white  ">
                  Profil Sekolah
                </Link>
              </Button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="img/akreditasi.png"
                alt="Akreditasi SMK TI Bazma"
                className="w-full max-w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </BlurFade>

      <section className="w-full text-white py-[75px] bg-blue my-[10px]">
        <div className="container mx-auto px-4 max-w-6xl ">
          <BlurFade delay={0.25 * 2} inView>
            <div className="flex flex-col-reverse lg:flex-row items-center  justify-between">
              <div className="flex flex-col text-center">
                <NeonGradientCard className="border-none max-w-[275px] object-fit">
                  <Card isFooterBlurred radius="lg" className="p-0">
                    <ImageWithSkeleton
                      src="./pak_dahlan.webp"
                      alt="Foto Pak dahlan"
                      size={340}
                    />
                  </Card>
                </NeonGradientCard>
                <h1 className="text-xl font-semibold mt-3 text-center lg:text-start">
                  - Ahmad Dahlan, S.Ag.
                </h1>
              </div>

              <div className=" grid mb-4 lg:mb-0 max-w-[750px] gap-4">
                <h1 className="text-4xl font-bold mb-2 mt-2 text-center lg:text-start">
                  PENGANTAR KEPALA SEKOLAH
                </h1>
                <p className="mt-2 font-normal text-lg text-justify">
                  SMK TI BAZMA merupakan sekolah yang merepresentasikan dari
                  sebuah realita kehidupan pendidikan era milenial sekarang ini.
                  Dimana perpaduan antara teknologi IT kekinian yang dilandasi
                  dengan nilai keagamaan serta Tahfidzul Qur'an dalam bingkai
                  Islamic boarding school.
                  <br /> <br />
                  Sekolah yang memiliki masa pendidikan 4 tahun ini terlahir
                  dari badan Filantropi kemanusiaan dengan full beasiswa untuk
                  peserta didik dhuafa dengan pendanaan hasil Zakat, infak,
                  shadaqoh dan wakaf dari Yayasan BAZMA.
                  <br />
                  <br />
                  Semoga SMK TI BAZMA selalu Istiqomah menebar manfaat dan
                  menjadi jawaban atas doa serta harapan bagi para energi masa
                  depan Indonesia sehingga kedepannya bisa merubah Mustahik
                  menjadi Muzaki sebagai generasi penerus perjuangan bangsa.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl mt-8">
        <BlurFade delay={0.25 * 2} inView>
          <h1 className="text-4xl lg:text-4xl font-black text-blue text-center uppercase mb-5">
            VISI
          </h1>
          <p className="text-lg text-white font-medium text-center mb-8 bg-blue p-5 rounded-sm">
            Menjadi sekolah yang melahirkan generasi berkarakter unggul,
            berkepribadian Islami, mandiri, berprestasi dan menebar manfaat.
          </p>
        </BlurFade>

        <div className="items-center">
          {/* Bagian Teks */}
          <BlurFade delay={0.25 * 3} inView>
            <h1 className="text-2xl lg:text-4xl font-black text-blue text-center uppercase mb-5">
              MISI
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center text-lg font-medium text-center bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                Menyelenggarakan Sekolah Menengah Kejuruan (SMK) yang
                berkualitas
              </div>

              <div className="flex items-center justify-center text-lg font-medium text-center bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                Melahirkan lulusan yang berkarakter unggul siap kerja
              </div>

              <div className="flex items-center justify-center text-lg font-medium text-center bg-white p-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                Mewujudkan generasi SDM yang berdaya saing global
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section className="bg-blue text-white p-12 rounded-2xl max-w-6xl mx-auto mt-8">
        <BlurFade delay={0.25 * 3} inView>
          <h1 className="text-2xl lg:text-4xl font-bold mb-12 text-center">
            Sistem, Informatika, Jaringan, & Aplikasi (SIJA)
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Text & Cards */}
            <div>
              <p className="text-base md:text-md mb-8 text-gray-100 text-justify">
                SIJA adalah perpaduan inovatif antara Teknik Komputer & Jaringan
                (TKJ) dan Rekayasa Perangkat Lunak (RPL). Sekolah kami
                dilengkapi dengan teknologi terbaru dalam bidang cloud
                computing untuk mempersiapkan siswa menghadapi tantangan masa
                depan.
              </p>

              {/* Deskripsi Aktif */}
              <div className=" text-white rounded-xl mb-6">
                <h2 className="text-lg font-semibold">{activeCard.subtitle}</h2>
                <p className="text-sm mt-2 leading-relaxed">
                  {activeCard.desc}
                </p>
              </div>

              {/* Auto Scroll Cards (Horizontal) */}
              {/* Auto Scroll Cards (Horizontal) */}
              <div className="slider">
                <div className="slide-track">
                  {cards.concat(cards).map((card, index) => (
                    <div key={index} className="slide">
                      <button
                        onClick={() => setActiveCard(card)}
                        className={`min-w-[300px] p-4 rounded-xl border text-left shadow-sm ${
                          activeCard.id === card.id
                            ? "bg-blue text-white border-blue-400"
                            : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        <h4 className="font-bold text-base">{card.title}</h4>
                        <p className="text-sm">{card.subtitle}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Active Card Image & Detail */}
            <div className="flex flex-col items-center text-center">
              <img
                src={activeCard.img}
                alt={activeCard.title}
                className="w-full h-70 object-cover rounded-2xl"
              />
            </div>
          </div>
        </BlurFade>
      </section>

      <div className="container mx-auto rounded-lg max-w-6xl mb-[75px] mt-8 p-10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        <BlurFade delay={0.25 * 3} inView>
          <h1 className="text-4xl font-bold text-blue mb-8 ">
            Mengapa Sekolah di SMK TI BAZMA?
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className="grid lg:flex items-center">
            <Ppdb />
          </div>
        </BlurFade>
      </div>
      <div className="container mx-auto rounded-lg max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Kiri */}
        <div className="flex flex-col gap-6 ">
          {/* Map + Alamat */}
          <div className="rounded-xl overflow-hidden shadow-md border">
            <img
              src="/map.png"
              alt="map"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-sm text-gray-600">
              JL Raya Cikampek Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea,
              Kabupaten Bogor, Jawa Barat 16620
            </div>
          </div>

          {/* Kontak */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="text-2xl text-blue-500">📧</div>
              <div className="font-semibold">Email</div>
              <div className="text-sm">smktibazma@gmail.com</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="text-2xl text-blue-500">📞</div>
              <div className="font-semibold">Call</div>
              <div className="text-sm">+62 821 2183 1439</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="text-2xl text-green-500">💬</div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm">0821 2183 1439</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="text-2xl text-pink-500">📷</div>
              <div className="font-semibold">Instagram</div>
              <div className="text-sm">@smktibazma</div>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="rounded-xl shadow-md border p-6 flex flex-col gap-4">
          <div className="text-blue-600 font-semibold">Tanya Ke Bazma AI</div>

          <div className="flex flex-col gap-2">
            {/* Pesan user */}
            <div className="flex justify-end">
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg max-w-xs">
                Jurusan di smktibazma?
              </div>
            </div>

            {/* Balasan AI */}
            <div className="flex items-start gap-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-bold">
                BZM
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                SIJA adalah perpaduan inovatif antara Teknik Komputer & Jaringan
                (TKJ) dan Rekayasa Perangkat Lunak (RPL). Sekolah kami
                dilengkapi dengan teknologi terbaru dalam bidang cloud computing
                untuk mempersiapkan siswa menghadapi tantangan masa depan.
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Jurusan di smktibazma?"
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Kirim
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mb-[75px]">
        <BlurFade delay={0.25 * 2} inView>
          <h1 className="text-4xl text-center font-bold text-blue-800 mb-4">
            Mitra Kami
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <DaftarMitra />
        </BlurFade>
      </div>
      <Footer />
      <div className="w-full text-center flex justify-between mt-[-20px]">
        <div className="bg-blue w-[500px] h-[30px]"></div>
        <div className="bg-green w-[500px] h-[30px]"></div>
        <div className="bg-red w-[500px] h-[30px]"></div>
      </div>
    </section>
  );
}
