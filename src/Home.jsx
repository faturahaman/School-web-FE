import React from "react";
import Section from "../layout/Section";
import TentangKamiSection from "../components/TentangKamiSection";

const tentangKamiCards = [
  {
    icon: "🔬",
    title: "Sertifikasi Industri",
    description:
      "Lulusan mendapat sertifikat kompetensi yang diakui industri",
  },
  {
    icon: "📄",
    title: "Kurikulum Relevan",
    description: "Kurikulum yang disesuaikan dengan kebutuhan dunia kerja",
  },
  {
    icon: "👨‍🏫",
    title: "Instruktur berpengalaman",
    description: "Dibimbing oleh instruktur yang ahli di bidang",
  },
  {
    icon: "🧪",
    title: "Fasilitas Lengkap",
    description: "Fasilitas praktikum lengkap dengan peralatan terkini",
  },
];

function Home() {
  return (
    <Section className="bg-[#f7f7f7] px-4 py-12 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Gambar - Mobile first, Desktop second */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img
            src="/public/test1.png"
            alt="SMK AK Nusa Bangsa"
            className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover"
          />
        </div>
        {/* Content */}
        <TentangKamiSection cards={tentangKamiCards} />
      </div>
    </Section>
  );
}

export default Home;
