"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner from "@/components/banner";
import { Contact } from "@/components/card";
import Footer from "@/components/footer";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

// Definisikan tipe untuk data form
interface FormData {
  nama: string;
  status: "internalSekolah" | "eksternalSekolah";
  email: string;
  pesan: string;
}

export default function ServicePage() {
  // State untuk menyimpan nilai form
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    status: "internalSekolah",
    email: "",
    pesan: "",
  });

  // State untuk status kirim pesan
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Event handler untuk perubahan input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler untuk perubahan select
  const handleSelectChange = (selected: "internalSekolah" | "eksternalSekolah") => {
    setFormData((prevData) => ({
      ...prevData,
      status: selected,
    }));
  };

  // Event handler untuk submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/api/saran-masukan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        alert("Pesan Anda berhasil dikirim!");
        setFormData({
          nama: "",
          status: "internalSekolah",
          email: "",
          pesan: "",
        });
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <Banner heading="Saran & Masukan" imgSrc="/banner.avif" />

      <div className="py-8 lg:py-16 flex flex-col gap-4 px-4 mx-auto max-w-5xl">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=SMK%20TI%20BAZMA+(SMK%20TI%20VAZNA)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map"
          ></iframe>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl tracking-tight font-extrabold text-start text-blue-800 dark:text-white">
            Saran & Masukan
          </h1>
          <p className="font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div className="grid lg:flex w-full gap-4">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    type="text"
                    label="Nama Lengkap"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                  />
                  <Select
                    name="status"
                    label="Pilih Status"
                    placeholder="Internal Sekolah"
                    defaultSelectedKeys={[formData.status]}
                    // onSelectionChange={(selected) =>
                    //   handleSelectChange(selected as "internalSekolah" | "eksternalSekolah")
                    // }
                    onSelectionChange={(selected) => {
                      const selectedKey = Array.from(selected)[0] as "internalSekolah" | "eksternalSekolah"; // Convert selected Set to string
                      handleSelectChange(selectedKey);
                    }}
                    className="max-w-xs"
                  >
                    <SelectItem key="internalSekolah">Internal Sekolah</SelectItem>
                    <SelectItem key="eksternalSekolah">Eksternal Sekolah</SelectItem>
                  </Select>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Textarea
                    name="pesan"
                    label="Pesan"
                    placeholder="Masukan pesan yang ingin disampaikan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    className="w-full h-auto"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="py-4 gap-4">
          <h1 className="text-3xl sm:text-4xl font-black text-blue-800 ">Join Us</h1>
          <div className="grid lg:flex items-center justify-between">
            <div className="lg:w-3/4">
              <Contact />
            </div>
            <div className="flex flex-col items-center justify-center py-4 px-8 sm:px-6">
              <img
                src="/img/cta-join.png"
                className="w-1/2 h-auto mb-6"
                alt="CTA Join"
              />
              <p className="text-center text-base sm:text-lg lg:text-md text-gray-600 mb-6 max-w-xl">
                Bergabung dengan Saluran Whatsapp SMK TI BAZMA untuk informasi
                terbaru!!!
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl py-6 px-8"
                onClick={() =>
                  window.open(
                    "https://www.whatsapp.com/channel/0029VaX3o1jEKyZBKsNhFk0D",
                    "_blank"
                  )
                }
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
