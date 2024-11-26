"use client";
import { Image } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import { Snippet } from "@nextui-org/react";

export default function PPDB() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 ">
            <div className='relative w-full lg:h-[700px]'>
                {/* object-cover object-center top-0 left-0 right-0 bottom-0 */}
                <Image
                    isBlurred
                    src="/ppdb/banner.webp"
                    alt='Background PPDB'
                    className='w-full  rounded-xl shadow-xl'
                    loading="eager"
                />
            </div>

            <div className="container mx-auto my-auto max-w-5xl mt-2">
                <Description
                    description={
                        <div className="text-lg text-gray-500 text-justify">
                            <h1 className="text-4xl text-blue-700 font-extrabold py-3 ">
                                Profil Sekolah
                            </h1>
                            <p>
                                Merupakan sekolah vokasi berasrama yang fasilitas maupun operasionalnya didanai dari pengelolaan ZISWAF
                                dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
                            </p>
                            <br />
                            <p>
                                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                                selama 4 tahun (3 tahun pembelajaran <br /> di sekolah dan 1 tahun Praktik Kerja Lapang)
                            </p>
                            <br />
                            <Accordion variant="shadow">
                                <AccordionItem key="1" aria-label="Accordion 1" title="Kompetensi Keahlian">
                                    SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" title="Mitra Industri">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li className="hover:text-blue-500">Pertamina Hulu Energi</li>
                                        <li className="hover:text-blue-500">Pertamina Patra Niaga</li>
                                        <li className="hover:text-blue-500">Pertalife</li>
                                        <li className="hover:text-blue-500">Universitas Pertamina</li>
                                        <li className="hover:text-blue-500">FOZ</li>
                                        <li className="hover:text-blue-500">Rumah Amal Salman</li>
                                        <li className="hover:text-blue-500">PT. Sanbersy</li>
                                    </ul>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    }
                />
            </div>

            <div className="container mx-auto my-auto max-w-5xl mt-5">
                <Description
                    description={
                        <div className="text-lg text-gray-500 text-justify">
                            <h1 className="text-4xl text-blue-700 font-extrabold py-3 ">
                                Pembukaan PPDB
                            </h1>
                            <Accordion variant="shadow">
                                <AccordionItem key="1" aria-label="Accordion 2" title="Persyaratan Pendaftar">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li className="hover:text-blue-500">Laki-laki Muslim dan mampu membaca Al-Qur'an dengan baik</li>
                                        <li className="hover:text-blue-500">Berasal dari keluarga tidak mampu (dibuktikan dengan SKTM dari Masjid setempat)</li>
                                        <li className="hover:text-blue-500">Lulus jenjang SMP/MTs/Sederajat pada TP 2023 atau 2024</li>
                                        <li className="hover:text-blue-500">Usia maksimal 17 tahun pada tanggal 30 Juni 2025</li>
                                        <li className="hover:text-blue-500">Sehat jasmani dan rohani (tidak buta warna, tidak merokok dan tidak mempunyai penyakit menular)</li>
                                        <li className="hover:text-blue-500">Berkelakuan baik dan tidak memiliki riwayat kejahatan</li>
                                        <li className="hover:text-blue-500">Mendapat persetujuan Orangtua/Wali untuk tinggal di asrama selama masa pendidikan                                        </li>
                                        <li className="hover:text-blue-500">Memiliki minat yang tinggi terhadap dunia digital dan teknologi informasi.                                        </li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" title="Dokumen Pendukung">
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li className="hover:text-blue-500">Kartu Keluarga.</li>
                                        <li className="hover:text-blue-500">Pas foto berwarna terbaru.</li>
                                        <li className="hover:text-blue-500">SKTM dari Masjid Setempat.</li>
                                        <li className="hover:text-blue-500">Surat rekomendasi Wali Kelas/Guru SMP.</li>
                                        <li className="hover:text-blue-500">Foto berwarna rumah yang ditempati (tampak depan, tampak samping, kamar tidur, ruang tamu, dapur dan kamar mandi)</li>
                                        <li className="hover:text-blue-500">Membuat essay/karangan bebas tentang “Peran saya sebagai pemuda di Era Digital”  PPDB SMK TI BAZMA.</li>
                                    </ul>
                                </AccordionItem>
                            </Accordion>
                            <p className="mt-6">
                                ⚠️ Pendaftar yang mengalami kesulitan atau keterbatasan dalam mengakses formulir online dapat menghubungi <br />
                                Pak Dzikri <Snippet symbol="+62" size="sm" variant="bordered" color="primary">812-1593-1522</Snippet>
                            </p>
                        </div>
                    }
                />
            </div>

            <Footer />
        </section>
    );
}
