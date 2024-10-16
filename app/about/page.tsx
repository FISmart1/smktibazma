"use client";
import Banner from "@/components/banner";
import Description from "@/components/desc";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "@/components/footer";
import App from "@/components/sa";
import BlurFade from "@/components/magicui/blur-fade";
import FacilityTabs, { InfoCard } from "@/components/facility";
import Carousel from "@/components/carousel";
import CarouselAsrama from "@/components/carousel-program-asrama";
import Widget2 from "@/components/widget";
import TabsLogo from "@/components/tabs-logo";
import KompotensiKeahlian from "@/components/accordion-kompentensi-keahlian";

export default function DocsPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4">
        <Banner
          imgSrc={
            "https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
          }
          heading='Profil Sekolah'
        />

        <div className="container mx-auto  max-w-5xl py-8 ">
          <>
            <BlurFade delay={0.25} inView>
              <Description
                description={
                  <div className="text-lg text-gray-500 text-justify mb-6">
                    <p>
                      Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                      BAZMA) merupakan sekolah unggulan berasrama yang bebas biaya dan diperuntukan untuk
                      anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                      maupun operasional didanai dari hasil pengelolaan wakaf dan
                      sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                      masyarakat.
                    </p>
                    <br />
                    <p>
                      SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                      selama 4 tahun dengan siswa-siswa terbaik yang berasal dari berbagai
                      daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
                      pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
                      Aplikasi) dengan kombinasi kurikulum berbasis asrama.
                    </p>
                  </div>
                }
              />
            </BlurFade>
          </>

          <div className="flex flex-col p-4 gap-4 rounded-xl w-full">
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.25 * 2} inView>
                <h1 className=" text-4xl font-bold text-blue-800 mb-4">Visi</h1>
                <div className="p-6 bg-blue-800 rounded-xl  shadow-md">
                  <h1 className="text-[16px] lg:text-xl font-bold text-white text-justify">
                    Menjadi sekolah yang melahirkan generasi berkarakter unggul,
                    berkepribadian Islami, mandiri, berprestasi dan menebar
                    manfaat.
                  </h1>
                </div>
              </BlurFade>
            </div>
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.25 * 2} inView>
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Misi</h1>
                <Accordion
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 1,
                          },
                        },
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            easings: "ease",
                            duration: 0.25,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 0.3,
                          },
                        },
                      },
                    },
                  }}
                >
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Misi ke-1"
                    className="text-lg text-blue-800 font-regular"

                  >
                    Menyelenggarakan Sekolah Menengah Kejuruan (SMK) yang berkualitas
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Misi ke-2" 
                    className="text-lg text-blue-800 font-regular"
                  >
                    Melahirkan lulusan yang berkarakter unggul siap kerja
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Misi ke-3"
                    className="text-lg text-blue-800 font-regular"

                  >
                    Mewujudkan generasi SDM yang berdaya saing global.
                  </AccordionItem>
                </Accordion>
              </BlurFade>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <App />
          <BlurFade delay={0.25 * 3} inView>
            <h1 className=" text-4xl font-bold text-blue-800 mr-5 mt-8 mb-4">Makna logo</h1>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
              <img src="https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png" alt="logo" />
              <TabsLogo />
            </div>
          </BlurFade>

        </div>

        <div className="container mx-auto my-auto px-4 max-w-5xl py-10">
          <BlurFade delay={0.25 * 2} inView>
            <KompotensiKeahlian />
          </BlurFade>
        </div>
        <Footer />
      </section>
    </div>
  );
}
