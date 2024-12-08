"use client";

import { Image, Accordion, AccordionItem, Snippet } from "@nextui-org/react";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import StepperPpdb from "@/components/stepper";
import { DaftarMitra } from "./partner";
import { CoolMode } from "@/components/magicui/cool-mode";

export default function PPDB() {
    const profileContent = (
        <div className="text-lg text-gray-500 text-justify">
            <h1 className="text-4xl text-blue-700 font-extrabold py-3">
                Profil Sekolah
            </h1>
            <p>
                Merupakan sekolah vokasi berasrama yang fasilitas maupun operasionalnya didanai dari pengelolaan ZISWAF
                dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
            </p>
            <p className="mt-4">
                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun (3 tahun pembelajaran) di sekolah
                dan 1 tahun Praktik Kerja Lapang.
            </p>
            <Accordion variant="splitted" className="mt-4">
                <AccordionItem key="1" title="Kompetensi Keahlian">
                    SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
                </AccordionItem>
                {/* <AccordionItem key="2" title="Mitra Industri">
                    <ul className="list-disc pl-5 space-y-2">
                        {[
                            "Pertalife Insurance",
                            "Shared Services Pertamina",
                            "Pertamina Training and Consulting (PTC)",
                            "Pertamina Hulu Rokan",
                            "Pertamina Retail",
                            "Pertamina Patra Niaga",
                            "Elnusa Petrofin",
                            "Universitas Pertamina",
                            "Yayasan Kesehatan Pertamina",
                            "PT. Sanbersy",
                        ].map((partner, idx) => (
                            <li key={idx} className="hover:text-blue-500">
                                {partner}
                            </li>
                        ))}
                    </ul>
                </AccordionItem> */}
            </Accordion>

            <h1 className="text-4xl text-blue-700 font-extrabold py-3 mt-10">
                Daftar Mitra
            </h1>
            <DaftarMitra/>
        </div>
    );

    const ppdbContent = (
        <div className="text-lg text-gray-500 text-justify">
            <h1 className="text-4xl text-blue-700 font-extrabold py-3">
                Pembukaan PPDB
            </h1>
            <Accordion variant="splitted">
                <AccordionItem key="1" title="Persyaratan Pendaftar">
                    <ul className="list-disc pl-5 space-y-2">
                        {[
                            "Laki-laki Muslim dan mampu membaca Al-Qur'an dengan baik",
                            "Berasal dari keluarga tidak mampu (dibuktikan dengan SKTM dari Masjid setempat)",
                            "Lulus jenjang SMP/MTs/Sederajat pada TP 2024 atau 2025",
                            "Usia maksimal 17 tahun pada tanggal 30 Juni 2025",
                            "Sehat jasmani dan rohani (tidak buta warna, tidak merokok dan tidak mempunyai penyakit menular)",
                            "Berkelakuan baik dan tidak memiliki riwayat kejahatan",
                            "Mendapat persetujuan Orangtua/Wali untuk tinggal di asrama selama masa pendidikan",
                            "Memiliki minat yang tinggi terhadap dunia digital dan teknologi informasi.",
                        ].map((requirement, idx) => (
                            <li key={idx} className="hover:text-blue-500">
                                {requirement}
                            </li>
                        ))}
                    </ul>
                </AccordionItem>
                <AccordionItem key="2" title="Dokumen Pendukung">
                    <ul className="list-disc pl-5 space-y-2">
                        {[
                            "Kartu Keluarga",
                            "Pas foto berwarna terbaru",
                            "SKTM dari Masjid Setempat",
                            "Surat rekomendasi Wali Kelas/Guru SMP",
                            "Foto berwarna rumah yang ditempati (tampak depan, samping, kamar tidur, ruang tamu, dapur, kamar mandi)",
                            "Membuat essay/karangan bebas tentang “Peran saya sebagai pemuda di Era Digital” PPDB SMK TI BAZMA",
                        ].map((document, idx) => (
                            <li key={idx} className="hover:text-blue-500">
                                {document}
                            </li>
                        ))}
                    </ul>
                </AccordionItem>
            </Accordion>
            {/* <p className="mt-6">
                ⚠️ Pendaftar yang mengalami kesulitan atau keterbatasan dalam mengakses formulir online dapat menghubungi <br />
                Pak Dzikri <Snippet symbol="+62" size="sm" variant="bordered" color="primary">812-1593-1522</Snippet>
            </p> */}
        </div>
    );

    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <div>
                <Image
                    isZoomed
                    src="/ppdb/banner.webp"
                    alt="Background PPDB"
                    className="w-full h-auto cursor-grab"
                    loading="eager"
                />
            </div>
            <div className="container mx-auto max-w-5xl mt-2">
                <Description description={profileContent} />
            </div>
            <div className="container mx-auto max-w-5xl my-10">
                <Description description={ppdbContent} />

            </div>
            <div className="container mx-auto max-w-5xl my-10 px-4">
                <h1 className="text-4xl text-blue-700 font-extrabold ">
                    Info PPDB
                </h1>
            </div>

            <div className="container mx-auto px-4 max-w-7xl mt-0">
                <BlurFade delay={0.25 * 2} inView>
                    <div className="overflow-x-auto flex items-center justify-start scrollbar-width-none [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden">
                        <StepperPpdb />
                    </div>
                </BlurFade>
            </div>


            <div className="container mx-auto max-w-5xl mt-6">
                <BlurFade delay={0.25 * 2} inView>
                    <div className="mx-auto max-w-2xl py-35 sm:py-50 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-6xl">Daftarkan Dirimu Sekarang!</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Daftar Sebelum 31 Januari 2025, Pendaftar yang mengalami kesulitan atau keterbatasan dalam mengakses formulir online dapat menghubungi Kami.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a target="_blank" rel="noreferrer" href="https://wa.me/6281215931522" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Contact</a>
                            <CoolMode>
                            <a href="/ppdb" target="_self" className="text-sm font-semibold text-gray-900">Daftar &rarr;</a>
                            </CoolMode>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl">
                        <div className="relative left-[calc(50%+3rem)] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:w-[72rem]"></div>
                    </div>
                </BlurFade>
            </div>


            <Footer />
        </section>
    );
}
