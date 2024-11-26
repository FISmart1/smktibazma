"use client";
import { Button, Divider, Image, Link } from "@nextui-org/react";
import { GithubIcon, TwitterIcon } from "./icons";
import BlurFade from "./magicui/blur-fade";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer
      className="w-full text-white py-12 bg-blue-800"
      
    >
      <BlurFade delay={0.25 * 2} inView>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <Image src="./logo.webp" width={150} alt="Logo" loading="lazy" />
              <h1 className="text-2xl font-bold mb-2 mt-2">
                ENERGI MASA <br />
                DEPAN INDONESIA
              </h1>
            </div>

            <div className="mb-4 md:mb-0">
              <div className="flex space-x-12">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-2">Tentang Kami</h2>
                  <ul>
                    <li>
                      <Link
                        href="/about"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Profil Sekolah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partner"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Kemitraan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        Saran & Masukan
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-2">Portfolio</h2>
                  <ul>
                    <li>
                      <Link
                        href="https://sismako.smktibazma.sch.id/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        SISMAKO
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white font-light text-[14px] hover:text-gray-400"
                      >
                        SAS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold mb-2">
                    <Link href="/service" className="text-white">
                      Hubungi Kami
                    </Link>
                  </h2>
                  <h2 className="text-lg font-semibold mb-2">
                    <Link
                      href="https://sismako.smktibazma.sch.id/smktibazma.sch.id"
                      className="text-white"
                    >
                      Progress Siswa
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-4 bg-white" />
          <div className=" mt-6 pt-4 text-center flex justify-between">
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
                <IconBrandWhatsapp color="white"/>
              </Link>
              <Link
                href="https://www.instagram.com/smktibazma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram color="white"/>
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandYoutube color="white"/>
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
}