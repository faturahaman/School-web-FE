import { GraduationCap, ArrowRight, Triangle } from "lucide-react";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="md:px-35 md:py-7 px-5 py-5">
        <div>
          <div className="inline-flex items-center gap-x-2 bg-gray-300 px-4 py-2 rounded-full text-sm md:text-base">
            <GraduationCap />
            <h3 className="text-lg">SMK Analis Kimia terdepan!</h3>
          </div>

          <div>
            <div className="mb-5">
              <h1 className="font-bold text-6xl leading-tight">
                Mencetak <br /> Tenaga Ahli <br />{" "}
                <span className="text-red-500">Profesional</span>
              </h1>
            </div>
            <div>
              <p className="max-w-md text-gray-800 text-lg">
                SMK AK Nusa Bangsa adalah sekolah menengah kejuruan yang fokus
                pada pengembangan kompetensi siswa di bidang teknologi, kimia, dan
                farmasi untuk siap memasuki dunia kerja
              </p>
            </div>
          </div>

          <div className="flex space-x-3 mt-5">
            <a
              href="/daftar"
              className="flex items-center gap-2 bg-[#e63946] text-white font-bold px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 relative top-[2px]" />
            </a>

            <a
              href="/tour"
              className="flex items-center gap-2 bg-white font-bold px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-black"
            >
              <Triangle className="rotate-90 w-5 h-5" />
              Virtual tour
            </a>
          </div>

          <div className="flex md:gap-15 justify-around mt-8 text-center max-w-xl">
            <div className="text-center">
              <h3 className="font-semibold text-3xl">500+</h3>
              <p className="text-gray-500">Siswa aktif</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-3xl">95%</h3>
              <p className="text-gray-500">Tingkat kelulusan</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-3xl">88%</h3>
              <p className="text-gray-500">Langsung bekerja</p>
            </div>
          </div>
        </div>

        <div>{/* tempat foto */}</div>
      </section>
      <Section>
        <div className="flex flex-col items-center w-full">
          <button className="bg-[#a63c32] text-white px-6 py-2 rounded-full font-semibold mb-4">Tentang kami</button>
          <h2 className="font-bold text-4xl md:text-5xl text-center mb-4">SMK Unggulan dengan<br /> Kompetensi Tinggi</h2>
          <p className="text-[#a63c32] text-lg text-center max-w-xl mb-8">
            SMK AK Nusa Bangsa adalah sekolah yang telah mencetak ribuan lulusan yang kompeten di bidang teknologi, kimia, dan farmasi. Kami berkomitmen untuk memberikan siswa langsung terjun ke dunia kerja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
              <span className="mb-2">🔬</span>
              <span className="font-semibold">Sertifikasi Industri</span>
              <p className="text-gray-700 text-sm mt-1">Lulusan mendapat sertifikat kompetensi yang diakui industri</p>
            </div>
            <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
              <span className="mb-2">📄</span>
              <span className="font-semibold">Sertifikasi Industri</span>
              <p className="text-gray-700 text-sm mt-1">Kurikulum yang disesuaikan dengan kebutuhan dunia kerja</p>
            </div>
            <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
              <span className="mb-2">👨‍🏫</span>
              <span className="font-semibold">Instruktur berpengalaman</span>
              <p className="text-gray-700 text-sm mt-1">Dibimbing oleh instruktur yang ahli di bidang</p>
            </div>
            <div className="border rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
              <span className="mb-2">🧪</span>
              <span className="font-semibold">Sertifikasi Industri</span>
              <p className="text-gray-700 text-sm mt-1">Fasilitas praktikum lengkap dengan peralatan terkini</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import Section from "./Section";
export default Hero;
