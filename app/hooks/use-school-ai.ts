import React from "react";
import stringSimilarity from "string-similarity";

interface Message {
  type: "user" | "ai";
  content: string;
}

const schoolFAQ: { [key: string]: string } = {
  sejarah:
    "SMK TI Bazma resmi didirikan pada 18 April 2022 oleh Yayasan Baituzzakah Pertamina (BAZMA).",
  "kepala sekolah": "Kepala sekolah saat ini adalah Ahmad Dahlan.",
  jurusan:
    "Jurusan utama adalah SIJA (Sistem Informatika, Jaringan, dan Aplikasi).",
  program:
    "Program sekolah meliputi SIJA, soft skill, dan boarding school berbasis nilai Islami.",
  beasiswa:
    "Seluruh siswa mendapat beasiswa penuh yang dibiayai dari zakat, infak, sedekah, wakaf, serta dukungan Pertamina.",
  fasilitas:
    "Fasilitas sekolah mencakup asrama, laboratorium komputer, masjid, aula, lapangan olahraga, dan layanan kesehatan.",
  kurikulum:
    "SMK TI Bazma menerapkan sistem boarding school berbasis nilai Islami, termasuk hafalan minimal 3 juz Al-Qur’an.",
  eskul:
    "Kegiatan ekstrakurikuler meliputi robotik, pencak silat, pramuka, dan futsal.",
  proyek:
    "Proyek siswa mencakup Big Data SISMAKO, E-Absensi WhatsApp, dan kaderisasi imam serta khatib.",
  guru: "Bu Ristina Eka Salsabila S.Kom",
  siswa: "Nur Yusuf Ferdiansyah",
  "nur yusuf": "tidak",
  "bu bila atau nur yusuf": "bu bila pastinya",
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
  const findAnswerHybrid = (question: string) => {
    const q = question.toLowerCase();

    // 1. cek keyword dengan fuzzy match
    const keywords = Object.keys(schoolFAQ);
    const bestKeyword = stringSimilarity.findBestMatch(q, keywords).bestMatch;
    if (bestKeyword.rating > 0.3) {
      return schoolFAQ[bestKeyword.target];
    }

    // 2. jika tidak ada keyword, pakai similarity ke jawaban
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
