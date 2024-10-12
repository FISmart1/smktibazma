import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { IconCircleFilled } from "@tabler/icons-react";

export default function TabsLogo() {
  return (
    <div className="flex flex-col lg:px-8">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" placement="top" color="primary">
          <Tab key="biru" title="Biru" >
            <Card className="max-w-2xl p-3">
              <CardBody className="flex flex-col">
                <div className="flex flex-row items-center space-x-4">
                  <span className="w-1/3">
                    <img
                      src="/img/logo-maping-01.png"
                      alt="logo-maping-1"
                      className="w-full h-auto rounded-md"
                    />
                  </span>
                  <div className="w-2/3">
                    <h1 className="text-xl font-bold">Rumah</h1>
                    <p className="text-md text-justify">
                      Mengintrepretasikan tempat tinggal yang nyaman; (Merupakan
                      sekolah dengan model asrama).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <IconCircleFilled className="w-1/4 h-auto" color="#0072F5" />
                  <p className="text-sm text-justify">
                    Warna Biru mencerminkan tekad SMK TI BAZMA dalam mencetak
                    insan yang progresif, inovatif dan kreatif di bidang
                    Teknologi Digital. Warna ini juga bermakna kekuatan serta
                    kewibawaan para insan agar mampu menjalankan khasanah
                    keilmuan dengan penuh tanggung jawab.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>

          <Tab key="hijau" title="Hijau">
            <Card className="max-w-2xl p-3">
              <CardBody className="flex flex-col">
                <div className="flex flex-row items-center space-x-4">
                  <span className="w-1/3">
                    <img
                      src="/img/logo-maping-02.png"
                      alt="logo-maping-1"
                      className="w-full h-auto rounded-md"
                    />
                  </span>
                  <div className="w-2/3">
                    <h1 className="text-xl font-bold">Orang</h1>
                    <p className="text-md text-justify">
                      Representasi dari visi SMK TI BAZMA membentuk pribadi
                      unggul, berkarakter dan menebar manfaat untuk sesama.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <IconCircleFilled className="w-1/6 h-auto" color="#A8AE37" />
                  <p className="text-sm text-justify">
                    Warna Hijau mencerminkan identitas alam dan ke-Islam-an,
                    sebagai entitas yang peduli terhadap lingkungan dan
                    berpegang teguh kepada nilai-nilai Islami dalam kehidupan.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>

          <Tab key="merah" title="Merah">
            <Card className="max-w-2xl p-3">
              <CardBody className="flex flex-col">
                <div className="flex flex-row items-center space-x-4">
                  <span className="w-1/3">
                    <img
                      src="/img/logo-maping-03.png"
                      alt="logo-maping-1"
                      className="w-full h-auto rounded-md"
                    />
                  </span>
                  <div className="w-2/3">
                    <h1 className="text-xl font-bold">Huruf TI</h1>
                    <p className="text-md text-justify">
                      Akronim dari Teknologi Informasi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <IconCircleFilled className="w-1/4 h-auto" color="#C8222F" />
                  <p className="text-sm text-justify">
                    Warna Merah mencerminkan keberanian, pantang menyerah serta mampu memancarkan energi positif bagi sekitar. Warna ini mencitrakan SMK TI BAZMA sebagai refleksi semangat Para Perwira dalam mengharumkan citra Bangsa Indonesia ke manca negara.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
