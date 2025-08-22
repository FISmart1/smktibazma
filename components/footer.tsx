"use client";
import { Button, Divider, Image, Link } from "@nextui-org/react";
import { GithubIcon, TwitterIcon } from "./icons";
import BlurFade from "./magicui/blur-fade";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMapPin, // lokasi / alamat
  IconPhone, // telepon
  IconMail, // email
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full text-white py-12 bg-blue pb-5">
      <BlurFade delay={0.25 * 2} inView>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <Image src="./logo.webp" width={150} alt="Logo" loading="lazy" />
              <h1 className="text-lg font-bold mb-3 mt-2">
                ENERGI MASA DEPAN INDONESIA
              </h1>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/about"
                    className="text-white font-light text-[14px] hover:text-gray-400"
                  >
                    <IconMapPin color="white" />
                    Jl. Raya Cikampak Cicadas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner"
                    className="text-white font-light text-[14px] hover:text-gray-400"
                  >
                    <IconPhone color="white" />
                    +62 821 2183 1439
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-white font-light text-[14px] hover:text-gray-400"
                  >
                    <IconMail color="white" />
                    smktibazma@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 md:mb-0">
              <div className="flex space-x-12">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-3">Beranda</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/about"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Profil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partner"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Sambutan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Kontak
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-3">Sekolah</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="https://sismako.smktibazma.sch.id/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Sejarah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Fasilitas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Struktur
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-3">Asrama</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="https://sismako.smktibazma.sch.id/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Sambutan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Struktur
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-3">Tim Pengembang</h2>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="https://sismako.smktibazma.sch.id/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Ristina Eka Salsabila, S.Kom
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Nur Yusuf Ferdiansyah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Muhammad Iqbal Asqalani
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Muhammad Sayyid Husein Al-Karim
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Ahmda Royhan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-4 bg-white" />
          <div className="mt-6 text-center flex justify-between">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SMK TI BAZMA. All rights
              reserved.
            </p>
            <div className="flex gap-3 ">
              <Link
                href="/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/smktibazma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram color="white" />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <IconBrandYoutube color="white" />
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
}