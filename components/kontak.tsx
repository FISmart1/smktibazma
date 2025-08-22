"use-client";
import React from "react";
import {
  IconMailFilled,
  IconPhoneFilled,
  IconBrandWhatsappFilled,
  IconBrandInstagramFilled,
} from "@tabler/icons-react";
import Ai from "./ai";

export default function Kontak() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-blue mb-8 text-center">Kontak</h1>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-8 rounded-lg">
        {/* Kiri */}
        <div className="flex flex-col gap-6">
          {/* Map + Alamat */}
          <div className="rounded-xl overflow-hidden shadow-md border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5827256447765!2d106.68614297483222!3d-6.574228493419154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db2b478d2725%3A0xa31558d4689b78c5!2sSMK%20TI%20BAZMA!5e0!3m2!1sid!2sid!4v1755878853568!5m2!1sid!2sid"
              className="w-full border-0"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="p-4 text-sm text-gray-600">
              JL Raya Cikampek Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea,
              Kabupaten Bogor, Jawa Barat 16620
            </div>
          </div>

          {/* Kontak */}
          <div className="grid grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="bg-blue p-3 text-white rounded-full mb-2">
                <IconMailFilled />
              </div>
              <div className="font-semibold">Email</div>
              <div className="text-sm">smktibazma@gmail.com</div>
            </div>

            {/* Call */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="bg-blue p-3 text-white rounded-full mb-2">
                <IconPhoneFilled />
              </div>
              <div className="font-semibold">Call</div>
              <div className="text-sm">+62 821 2183 1439</div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="bg-blue p-3 text-white rounded-full mb-2">
                <IconBrandWhatsappFilled />
              </div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm">0821 2183 1439</div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md border p-4 text-center">
              <div className="bg-blue p-3 text-white rounded-full mb-2">
                <IconBrandInstagramFilled />
              </div>
              <div className="font-semibold">Instagram</div>
              <div className="text-sm">@smktibazma</div>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex flex-col gap-6">
          <Ai />
        </div>
      </div>
    </section>
  );
}
