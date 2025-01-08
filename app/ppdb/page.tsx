"use client";

import { Image, Accordion, AccordionItem, Snippet } from "@nextui-org/react";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import StepperPpdb from "@/components/stepper";
import { DaftarMitra } from "./partner";

import { CoolMode } from "@/components/magicui/cool-mode";
import Banner from "@/components/banner";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { subtitle } from "@/components/primitives";

export default function PPDB() {
  const profileContent = (
    // <div className="text-lg text-gray-500 text-justify">
    //   <h1 className="text-4xl text-blue-800 font-extrabold py-3">
    //     Penerimaan Peserta Didik Baru (PPDB) TA 2025/2026
    //   </h1>
    //   <br />
    //   <p>
    //     SMK TI BAZMA Islamic Boarding School merupakan sekolah vokasi berasrama
    //     yang fasilitas maupun operasionalnya didanai dari pengelolaan ZISWAF dan
    //     sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
    //     Kami membuka Penerimaan Peserta Didik Baru (PPDB) Angkatan 5 Tahun
    //     Ajaran 2025/2026. Disediakan beasiswa hingga 100%.
    //   </p>
    //   <br />
    //   <h4 className="text-2xl text-gray-500 font-bold">Kompetensi Keahlian:</h4>
    //   <p>
    //     <span className="font-bold">SIJA (Sistem Informatika, Jaringan & Aplikasi)</span>  dengan kombinasi
    //     kurikulum berbasis asrama yang ditempuh selama 4 tahun (3 tahun
    //     pembelajaran di sekolah dan 1 tahun Praktik Kerja Lapang).
    //   </p>


    // </div>
    <BlurFade delay={0.25 * 2} inView>
      <div className="container mx-auto my-[75px] px-4 max-w-6xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-4xl font-bold text-blue-800">
              Profil Sekolah
            </h1>
            <Button
              color="primary"
              className="max-w-40 bg-blue-800 hidden md:block "
            >
              <Link href="#headline" className="text-white">Daftar Sekarang</Link>
            </Button>
          </div>

          <div className="max-w-[600px] text-lg text-gray-500 text-justify">
            <p className={subtitle()}>
              SMK TI BAZMA Islamic Boarding School merupakan sekolah vokasi berasrama
              yang fasilitas maupun operasionalnya didanai dari pengelolaan ZISWAF dan
              sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
              Kami membuka Penerimaan Peserta Didik Baru (PPDB) Angkatan 5 Tahun
              Ajaran 2025/2026. Disediakan beasiswa hingga 100%.
            </p>
            {/* <br />
            <p className={subtitle()}>
              <h4 className="text-2xl text-gray-500 font-bold">Kompetensi Keahlian:</h4>

              <span className="font-bold">SIJA (Sistem Informatika, Jaringan & Aplikasi)</span>  dengan kombinasi
              kurikulum berbasis asrama yang ditempuh selama 4 tahun (3 tahun
              pembelajaran di sekolah dan 1 tahun Praktik Kerja Lapang).

            </p> */}
          </div>
        </div>
      </div>
    </BlurFade>
  );

  const ppdbContent = (
    <div className="text-lg text-gray-500 text-justify">
      <h1 className="text-4xl text-blue-800 font-extrabold mt-3">
        Cara Dan Ketentuan Pendaftaran
      </h1>
      <Accordion variant="splitted" className="mt-6 gap-3">
        <AccordionItem key="1" title="Persyaratan Pendaftar">
          <ul className="list-disc px-8 mb-4 space-y-2 ">
            {[
              "Laki-laki muslim dan mampu membaca Al-Qur'an dengan baik,",
              "Berasal dari keluarga dhuafa (dibuktikan dengan SKTM dari Masjid setempat),",
              "Lulus jenjang SMP/MTs/Sederajat pada TA 2024 atau 2025,",
              "Usia maksimal 17 tahun pada tanggal 30 Juni 2025,",
              "Sehat jasmani dan rohani (tidak buta warna, tidak merokok dan tidak mempunyai penyakit menular),",
              "Berkelakuan baik dan tidak memiliki riwayat kriminal,",
              "Mendapat persetujuan Orangtua/Wali untuk tinggal di asrama selama masa pendidikan,",
              "Memiliki minat yang tinggi terhadap dunia digital dan teknologi informasi.",
            ].map((requirement, idx) => (
              <li key={idx} className="hover:text-blue-500">
                {requirement}
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem key="2" title="Dokumen Pendukung">
          <div className="mb-3 px-4 ">

            <ul className="list-disc px-8 space-y-2">
              {[
                "Scan Akta Kelahiran",
                "Scan Kartu Keluarga",
                "Pas foto berwarna terbaru",
                "SKTM dari Masjid Setempat*",
                "Surat rekomendasi Wali Kelas/Guru SMP*",
                "Membuat Video Reels Instagram*",
                "Foto berwarna rumah yang ditempati (tampak depan, samping, kamar tidur, ruang tamu, dapur, kamar mandi)",
              ].map((document, idx) => (
                <li key={idx} className="hover:text-blue-500">
                  {document}
                </li>
              ))}
            </ul>
            <br />
            <p>* Template surat rekomendasi, SKTM dan ketentuan video, dapat diunduh pada link :</p>
            <a href="https://s.id/PPDBSMKTIBAZMA25-26" rel="noreferrer" className="text-blue-500 hover:text-blue-600" target="_blank">https://s.id/PPDBSMKTIBAZMA25-26</a>
          </div>

        </AccordionItem>
        <AccordionItem key="3" title="Ketentuan Video">
          <div className="px-5">

            <ul className="list-disc pl-5 space-y-2 ">
              {[
                "Follow akun resmi Instagram @smktibazma,",
                "Caption Reels : Saya sudah mendaftar PPDB SMK TI BAZMA! SMK Berasrama Bebas Biaya dengan jurusan SIJA (Sistem Informasi, Jaringan dan Aplikasi) Pendaftaran ditutup sampai 31 Januari 2025 daftar melalui : smktibazma.sch.id/ppdb  @smktibazma #PPDBSMKTIBAZMA2025 #SMKTIBAZMA #BAZMA,",
                "Mention 3 temanmu dan @smktibazma.",
              ].map((document, idx) => (
                <li key={idx} className="hover:text-blue-500">
                  {document}
                </li>
              ))}
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <h1 className="text-xl font-bold my-3">Isi Video:</h1>
              {[
                " Perkenalan diri, ceritakan tentang keunggulan dirimu dan hal bermanfaat dari keunggulan tersebut,",
                "Ceritakan motivasimu dan alasanmu mengikuti PPDB SMK TI BAZMA,",
                "Ceritakan tentang tujuan hidup atau cita-citamu dan bagaimana bersekolah di SMK TI BAZMA dapat membantumu meraih hal tersebut,",
                "SMK TI BAZMA berdiri diatas nilai-nilai kebermanfaatan, sebutkan hal bermanfaat yang akan kamu ikhtiarkan jika nantinya diterima sebagai siswa SMK TI BAZMA.",
              ].map((document, idx) => (
                <li key={idx} className="hover:text-blue-500">
                  {document}
                </li>
              ))}
            </ul>
            <br />
            <p className="mb-4">
              Pastikan video direkam ditempat yang rapi dan memiliki pencahayaan
              yang baik, pastikan juga suaramu dapat terdengar dengan jelas
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="w-full h-auto">
        <Banner imgSrc="/ppdb/banner.webp" heading="PPDB" />
      </div>
      <div className="container mx-auto max-w-5xl my-5">
        <Description description={profileContent} />
      </div>
      <div className="container mx-auto max-w-5xl ">
        <Description description={ppdbContent} />
      </div>
      <div className="container mx-auto max-w-5xl my-10 px-4">
        <h1 className="text-4xl text-blue-800 font-extrabold ">
          Timeline PPDB
        </h1>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mb-10">
        <BlurFade delay={0.25 * 2} inView>
          <div className="overflow-x-auto flex items-center justify-start  scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-200">
            <StepperPpdb />
          </div>
        </BlurFade>
      </div>


      <div className="container mx-auto max-w-5xl my-10" id="headline">
          <div className="mx-auto max-w-2xl py-35 sm:py-50 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-6xl">
              Daftarkan Dirimu Sekarang!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className="text-bold">Daftar Sebelum 31 Januari 2025.</span> br Pendaftar yang mengalami kesulitan
              atau keterbatasan dalam mengakses formulir online dapat
              menghubungi kami.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                rel="noreferrer"
                target="_blank"
                // rel="noreferrer"
                href="https://wa.me/628119520896"
                className="text-sm font-semibold text-gray-900"
              >
                Contact
              </a>
              <CoolMode>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdHKXPj-m2nTzYGaLKRyy9oSRyjcS8LXTjrGNGeBt7yde4TVQ/closedform"
                  target="_self"
                  className="rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                >
                  Daftar &rarr;
                </a>
              </CoolMode>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%+3rem)] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:w-[72rem]"></div>
          </div>
      </div>
      <div className="container mx-auto max-w-5xl my-10 px-4">
        <h1 className="text-4xl text-blue-800 font-extrabold py-3 mt-10">
          Daftar Mitra
        </h1>
        <DaftarMitra />
      </div>

      <Footer />
    </section>
  );
}
