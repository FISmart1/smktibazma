'use client'
import Banner from "@/components/banner";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import { DaftarMitra } from "../ppdb/partner";


export default function Donasi() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Banner
        imgSrc={
          // "https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
          "/banner.avif"
        }
        heading={'Kemitraan'}
      />
      <div className="container mx-auto my-auto px-4 max-w-5xl mt-10">
        <h1 className="text-4xl font-bold text-blue-800">Daftar Mitra</h1>
        <Description
          description={
            <div className="py-6 text-justify">
              <p className="text-lg text-gray-500">
                SMK TI Bazma adalah wujud cita-cita bersama dalam rangka
                memberikan ruang bagi peserta didik untuk dapat berkarya dan
                menjadi generasi produktif. Dengan bekal kecerdasan kognitif,
                emosional, dan spiritual yang baik, siswa-siswa ini diharapkan
                dapat menjadi generasi unggul dan berdaya saing global.
              </p>
              <br />
              <p className="text-lg text-gray-500">
                Oleh karena itu, SMK TI Bazma menjalin kerja sama dengan
                berbagai mitra Dunia Usaha dan Dunia Industri (DU/DI) sebagai
                upaya menyelaraskan kebutuhan industri dengan persiapan SDM yang
                kompeten. Bentuk kerja sama tersebut, antara lain:
              </p>
              <br />

              <ol className="list-decimal ml-6 text-lg text-gray-500">
                <li>
                  Memberikan kesempatan kepada siswa untuk melakukan Praktek
                  Kerja Industri (Prakerin) sebagai bekal persiapan menghadapi
                  dunia kerja.
                </li>
                <li>
                  Membantu dalam menyusun kurikulum yang selaras dengan sektor
                  industri masa kini untuk meningkatkan kemampuan SDM agar dapat
                  bersaing di dunia industri.
                </li>
              </ol>
            </div>
          }
        />
      </div>
      <div className="container mx-auto my-auto px-4 max-w-7xl">
        <DaftarMitra />
      </div>
      <Footer />
    </section>
  );
}
