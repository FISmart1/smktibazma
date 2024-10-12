"use client";
import CardProject, { CardTest, Contact, Ppdb } from "@/components/card";
import Footer from "@/components/footer";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, Divider, Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";
import Carousel from "@/components/carousel";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Timeline from "@/components/stepper";
import StepperJS from "@/components/stepper";
import { subtitle } from "@/components/primitives";

export default function Home() {
  const slidesData = [
    {
      img: "img/Angkatan.JPG",
      heading: "Energi Masa Depan Indonesia",

      desc: 'Selamat datang di SMK TI BAZMA, pusat pengembangan pendidikan yang berfokus pada pengembangan keterampilan teknologi informasi yang unggul dan berdaya saing. Kami berkomitmen untuk menciptakan generasi yang siap menghadapi tantangan dunia digital melalui pendidikan berkualitas, fasilitas lengkap, dan kurikulum berbasis teknologi terkini.'

    },
    {
      img: "/img/silat.JPG",
      heading: "Ekstrakurikuler Pencak Silat",
      desc: 'Pencak Silat adalah seni bela diri tradisional Indonesia yang mengajarkan keterampilan bertarung, disiplin, dan nilai-nilai budaya. Siswa kami dapat mengikuti ekstrakurikuler Pencak Silat untuk mengembangkan fisik, mental, dan karakter melalui latihan yang seimbang dan bermakna.'
    },


  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Carousel slides={slidesData} />
      <BlurFade delay={0.25 * 2} inView>
        <div className="container mx-auto my-[75px] px-4 max-w-6xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between h-full">
              <h1 className="text-4xl font-bold text-blue-800">
                Profile Sekolah
              </h1>
              <Button
                color="primary"
                className="max-w-40 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 hidden md:block"
              >
                Selengkapnya
              </Button>
            </div>

            <div className="max-w-[600px] text-lg text-gray-500 text-justify">
              <p className={subtitle()}>
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang bebas biaya dan diperuntukan untuk
                anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat.
              </p>
              <br />
              <p className={subtitle()}>
                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                selama 4 tahun dengan siswa-siswa terbaik yang berasal dari berbagai
                daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
                pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
                Aplikasi) dengan kombinasi kurikulum berbasis asrama.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <section
        className="w-full text-white py-[75px] bg-blue-800 my-[75px]"

      >
        <div className="container mx-auto px-4 max-w-6xl ">
          <BlurFade delay={0.25 * 2} inView>
            <div className="flex flex-col-reverse lg:flex-row items-center  justify-between">
              <div className=" grid mb-4 lg:mb-0 max-w-[625px] gap-5">
                <h1 className="text-4xl font-bold mb-2 mt-2 text-center lg:text-start">
                  Sambutan Kepala Sekolah
                </h1>
                <p className="mt-2 font-regular text-lg text-justify">
                  SMK TI BAZMA merupakan sekolah yang  merepresentasikan dari sebuah realita kehidupan pendidikan era milenial sekarang ini.  Dimana perpaduan antara teknologi IT kekinian yang dilandasi dengan nilai  keagamaan serta Tahfidzul Qur'an dalam bingkai Islamic boarding school.
                  <br /> <br />
                  Sekolah yang memiliki masa pendidikan 4 tahun ini terlahir dari badan Filantropi kemanusiaan dengan full beasiswa untuk peserta didik dhuafa dengan pendanaan hasil Zakat, infak, shadaqoh dan wakaf dari Yayasan BAZMA.
                  <br /><br />
                  Semoga SMK TI BAZMA selalu Istiqomah menebar manfaat dan menjadi jawaban atas doa serta harapan bagi para energi masa depan Indonesia sehingga kedepannya bisa merubah Mustahik menjadi Muzaki sebagai generasi penerus perjuangan bangsa.
                </p>
                <h1 className="text-3xl font-semibold mt-3 text-center lg:text-start">
                  - Ahmad Dahlan, S.Ag.
                </h1>
              </div>
              <NeonGradientCard className="border-none max-w-[275px] object-fit">

                <Card
                  isFooterBlurred
                  radius="lg"
                  className="p-0"
                >
                  <Image
                    isBlurred
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    height={340}
                    src="./pak_dahlan.avif"
                    width={275}
                  />
                </Card>
              </NeonGradientCard>
            </div>
          </BlurFade>
        </div>
        <hr className="border-b-large border-b-white mt-[50px]" />
      </section>


      <section className="container mx-auto px-4 max-w-6xl ">
        <BlurFade delay={0.25 * 2} inView>
          <h1 className="text-4xl lg:text-6xl font-black text-blue-800 text-center uppercase mb-12">
            Sistem, Informatika, Jaringan, & Aplikasi (SIJA)
          </h1>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bagian Teks */}
          <BlurFade delay={0.25 * 3} inView>

            <div className="space-y-6">
              <p className={subtitle()}>
                SIJA adalah perpaduan inovatif antara Teknik Komputer & Jaringan (TKJ) dan Rekayasa Perangkat Lunak (RPL). Kami dilengkapi dengan teknologi terbaru dalam bidang <span className="font-bold">cloud computing</span> untuk mempersiapkan siswa menghadapi tantangan masa depan.
              </p>
              <div className="text-xl leading-8 text-gray-700">
                <p className={"font-bold"}>Kompetensi Keahlian:</p>
                <ul className="list-disc pl-6">
                  <li className="mt-2"><span className="font-bold">Cloud computing</span> <span className="font-bold text-blue-800">(IaaS, PaaS, SaaS)</span></li>
                  <li className="mt-2"><span className="font-bold">Sistem internet of things</span> <span className="font-bold text-blue-800">(SIoT)</span></li>
                  <li className="mt-2"><span className="font-bold">Sistem keamanan jaringan</span> <span className="font-bold text-blue-800">(SKJ)</span></li>
                  <li className="mt-2"><span className="font-bold">Produk kreatif dan kewirausahaan</span> <span className="font-bold text-blue-800">(PKK)</span></li>
                </ul>
              </div>
            </div>
          </BlurFade>
          {/* Bagian Gambar */}
          <BlurFade delay={0.25 * 3} inView>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-end">
              {/* Card Gambar 1 */}
              <div className="relative group w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src="/img/Mufiz.jpg"
                  alt="Student Working on Computer"
                  className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Web Programming</div>
              </div>

              {/* Card Gambar 2 */}
              <div className="relative group w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src="/img/rakit.JPG"
                  alt="Students Building Hardware"
                  className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Komputer & Jaringan</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>


      <div className="container mx-auto max-w-6xl mb-[75px] mt-8 p-4">
        <BlurFade delay={0.25 * 3} inView>
          <h1 className="text-4xl font-bold text-blue-800 mb-8 ">Mengapa Sekolah di SMK TI BAZMA?</h1>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className="grid lg:flex items-center">
            <Ppdb />
          </div>
        </BlurFade>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mb-[75px]">
        <BlurFade delay={0.25 * 2} inView>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Info PPDB</h1>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <StepperJS />
        </BlurFade>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mb-[75px]">
      <BlurFade delay={0.25 * 2} inView>

        <h1 className="text-4xl font-bold text-blue-800 mb-4">Project siswa</h1>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>

        <CardProject />
        </BlurFade>
      </div>
      <Footer />
    </section>
  );
}
