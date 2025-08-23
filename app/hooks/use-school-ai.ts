import React from "react";
import stringSimilarity from "string-similarity";

interface Message {
  type: "user" | "ai";
  content: string;
}

const schoolFAQ: { [key: string]: string } = {
  sejarah: "SMK TI Bazma resmi didirikan pada 18 April 2022 oleh Yayasan Baituzzakah Pertamina (BAZMA) sebagai bentuk kontribusi sosial dalam bidang pendidikan teknologi berbasis nilai-nilai Islam.",

kepala_sekolah: "Kepala sekolah saat ini adalah Ahmad Dahlan, seorang pendidik visioner dengan latar belakang teknologi dan pendidikan karakter.",

jurusan: "Jurusan utama adalah SIJA (Sistem Informatika, Jaringan, dan Aplikasi), yang dirancang untuk mempersiapkan siswa menghadapi era digital.",

program: "Program sekolah meliputi jurusan SIJA, pembinaan soft skill, kepemimpinan, dan boarding school dengan nilai-nilai Islami sebagai dasar pendidikan.",

beasiswa: "Seluruh siswa mendapat beasiswa penuh dari dana zakat, infak, sedekah, wakaf, dan dukungan Pertamina. Siswa tidak dibebani biaya pendidikan maupun asrama.",

fasilitas: "Fasilitas sekolah mencakup asrama berstandar nyaman, laboratorium komputer modern, masjid megah, aula multifungsi, lapangan olahraga, kantin sehat, dan layanan kesehatan siswa.",

kurikulum: "SMK TI Bazma menerapkan kurikulum kejuruan nasional yang dipadukan dengan sistem boarding school berbasis Islam. Siswa ditargetkan hafal minimal 3 juz Al-Qur’an serta memiliki sertifikasi kompetensi teknologi.",

eskul: "Kegiatan ekstrakurikuler mencakup robotik, pencak silat, pramuka, futsal, desain grafis, pemrograman kompetitif, dan public speaking.",

proyek: "Proyek siswa antara lain: Big Data SISMAKO untuk monitoring siswa, sistem E-Absensi via WhatsApp, aplikasi tracking hafalan Qur'an, dan program kaderisasi imam & khatib muda.",

guru: "Guru-guru di SMK TI Bazma terdiri dari lulusan terbaik di bidangnya. Salah satunya adalah Bu Ristina Eka Salsabila S.Kom, pengampu bidang pemrograman dan perangkat lunak.",

siswa: "Salah satu siswa adalah Nur Yusuf Ferdiansyah, aktif dalam bidang pengembangan proyek dan menjadi teladan dalam karakter serta hafalan Qur’an.",

visi: "Menjadi sekolah kejuruan Islam terdepan yang menghasilkan lulusan kompeten, berakhlak mulia, dan berjiwa pemimpin.",

misi: "Membentuk siswa yang profesional di bidang teknologi, berlandaskan nilai-nilai Islam, dan siap bersaing di dunia kerja maupun melanjutkan pendidikan tinggi.",

slogan: "Cerdas, Terampil, Islami – Bersama SMK TI Bazma!",

mitra: "SMK TI Bazma bekerja sama dengan berbagai mitra industri dan pendidikan, termasuk Pertamina, perusahaan IT nasional, dan lembaga pendidikan tinggi.",

prestasi: "Siswa SMK TI Bazma telah meraih prestasi di bidang robotik tingkat nasional, lomba karya tulis ilmiah, dan kompetisi pemrograman tingkat pelajar.",

lokasi: "SMK TI Bazma berlokasi di Desa Gunung Sari, Kecamatan Kasimbar, Kabupaten Pasangkayu, Sulawesi Barat.",

kode_nis: "Setiap siswa memiliki NIS unik sebagai identitas dan digunakan dalam sistem monitoring dan absensi digital.",

penerimaan: "Penerimaan siswa baru dilakukan melalui seleksi akademik, wawancara, dan tes kepribadian serta komitmen terhadap pembelajaran Islam dan teknologi.",

hubungi: "Untuk informasi lebih lanjut, hubungi kami melalui WhatsApp resmi atau kunjungi website SMK TI Bazma."

};

const schoolResponses = Object.values(schoolFAQ);

export const useSchoolAI = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  // Fungsi similarity
  const findAnswer = (question: string) => {
    const bestMatch = stringSimilarity.findBestMatch(question, schoolResponses);
    if (bestMatch.bestMatch.rating > 0.2) return bestMatch.bestMatch.target;
    return "Maaf, saya belum punya jawaban untuk pertanyaan itu.";
  };

  // Hybrid keyword + similarity + fuzzy keyword
  // Hybrid keyword + similarity + fuzzy keyword
const findAnswerHybrid = (question: string) => {
  const q = question.toLowerCase();
  const keywords = Object.keys(schoolFAQ);

  // Cari semua keyword yang muncul + kasih skor
  let bestMatch = { score: 0, answer: "" };

  keywords.forEach((key) => {
    const sim = stringSimilarity.compareTwoStrings(q, key);
    if (sim > bestMatch.score) {
      bestMatch = { score: sim, answer: schoolFAQ[key] };
    }
  });

  // Jika keyword ketemu cukup mirip
  if (bestMatch.score > 0.3) {
    return bestMatch.answer;
  }

  // Jika tidak, fallback ke similarity terhadap jawaban
  return findAnswer(q);
};


  const sendMessage = (content: string) => {
    const userMessage: Message = { type: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiMessage: Message = {
        type: "ai",
        content: findAnswerHybrid(content),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  return { messages, sendMessage };
};
