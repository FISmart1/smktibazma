"use client";

import CardBlog from "@/components/card-blog";
import CardProject from "@/components/card-project";
import { title } from "@/components/primitives";
import Banner from "@/components/banner";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import Marquee from "@/components/magicui/marquee";
import { ZakatMarquee } from "@/components/zakat";
import { ListMarquee } from "@/components/donasi";

export default function Donasi() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Banner
        imgSrc={
          "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
        }
        heading='Donasi'
      />
      <div className="container mx-auto my-auto max-w-5xl mt-10">
        <Description
          description={
            <div className="text-lg text-gray-500 text-justify">
              <p>
                Yayasan Baituzzakah Pertamina (Bazma) adalah Lembaga Nirlaba
                yang berkhidmat mengangkat harkat sosial kemanusiaan dengan
                mendayagunakan dana zakat, infak/sedekah dan wakaf (Ziswaf) yang
                bersumber dari masyarakat. Dana yang terhimpun disalurkan dalam
                beragam bentuk program sosial, pendidikan, kesehatan, pelayanan
                dhuafa, penanganan bencana dan pemberdayaan ekonomi masyarakat
                di seluruh Indonesia.
              </p>
              <br />
              <p>
                Salah satu program yang sedang digulirkan adalah wakaf
                Pembangunan SMK TI Bazma, sebuah model pengelolaan pendidikan
                yang diharapkan bisa mencetak kader-kader berkarakter unggul dan
                berdaya saing bersaing di era global.
              </p>
              <br />
              <p>
                Salurkan Wakaf terbaik anda melalui 
                <span className="font-bold">Bank Syariah Indonesia (BSI) :</span>
              </p>
              <h1 className="text-4xl text-blue-700 font-extrabold py-3 ">
                711.88.444.88
              </h1>
              <p>A.N Yayasan Baituzzakah Pertamina</p>
            </div>
          }
        />
      </div>

      <div className="container mx-auto mb-12 px-4 max-w-5xl  ">
        <div className="mb-4">
          <h1 className="text-4xl font-extrabold text-[#0057B8] mb-6">
            Donasi
          </h1>
          <ListMarquee />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-[#0057B8] mb-6">
            Infak/Shadaqah
          </h1>
          <ZakatMarquee />
        </div>
      </div>

      <Footer />
    </section>
  );
}
