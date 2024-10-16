import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { Divide } from "lucide-react";

export default function KompotensiKeahlian() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["2"]}>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        subtitle="Press to expand"
        title={
          <h1 className="text-lg font-bold text-blue-800">
            SIJA (Sistem Informatika, Jaringan dan Aplikasi)
          </h1>
        }
      >
        <p className="text-lg text-gray-500 text-justify">
          Pembelajaran Jurusan SIJA di SMK TI BAZMA berlangsung selama 4 tahun,
          dengan model pembelajaran 3 tahun di sekolah sedangkan 1 tahun
          pembelajaran di industri dalam bentuk Praktek Kerja Industri
          (PRAKERIN). Dengan program studi 4 tahun ini, lulusan SIJA dapat
          setara dengan D1 atau lebih unggul satu level dari program keahlian 3
          tahun lainnya.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={<span>Press to expand</span>}
        title={
          <h1 className="text-lg font-bold text-blue-800">
            Apa saja yang dipelajari?
          </h1>
        }
      >
        <p className="text-lg text-gray-500 capitalize text-justify">
          Sistem komputer, jaringan komputer, Pemrogaman Dasar, Dasar Desain
          Grafis , Sistem Internet of Thingsi, komputasi awan, Informatika, sistem keamanan
          jaringan, materi sinkronisasi dengan industri, serta produk kreatif
          dan kewirausahaan.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        subtitle="Press to expand"
        title={
          <h1 className="text-lg font-bold text-blue-800">
            Peluang kerja SIJA
          </h1>
        }
      >
        <ul className="text-lg text-gray-500 capitalize list-disc ms-4">
          <li>Developer aplikasi (Programmer),</li>
          <li>IT support perangkat lunak, perangkat keras dan jaringan,</li>
          <li>Konsultan IT (Kursus dan tutorial),</li>
          <li>Wirausahawan di bidang IT,</li>
          <li>Wirausahawan di bidang desain grafis dan percetakan,</li>
          <li>Membuat start-up.</li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
