import { GraduationCap, ArrowRight, Triangle } from "lucide-react";
import Section from "./Section";

function Hero() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="md:px-20 md:py-12 px-5 py-8 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Teks */}
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-x-2 bg-gray-300 px-4 py-2 rounded-full text-sm md:text-base mb-4">
              <GraduationCap />
              <h3 className="text-lg">SMK Analis Kimia terdepan!</h3>
            </div>

            <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-4">
              Mencetak <br /> Tenaga Ahli <br />
              <span className="text-red-500">Profesional</span>
            </h1>

            <p className="text-gray-800 text-lg max-w-md mb-6">
              SMK AK Nusa Bangsa adalah sekolah menengah kejuruan yang fokus pada pengembangan kompetensi siswa di bidang teknologi, kimia, dan farmasi untuk siap memasuki dunia kerja
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="/daftar"
                className="flex items-center gap-2 bg-[#e63946] text-white font-bold px-5 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5 relative top-[2px]" />
              </a>

              <a
                href="/tour"
                className="flex items-center gap-2 bg-white font-bold px-5 py-2 rounded-lg hover:bg-gray-200 transition border border-black"
              >
                <Triangle className="rotate-90 w-5 h-5" />
                Virtual Tour
              </a>
            </div>

            <div className="flex justify-between max-w-sm text-center">
              <div>
                <h3 className="font-semibold text-3xl">500+</h3>
                <p className="text-gray-500">Siswa aktif</p>
              </div>
              <div>
                <h3 className="font-semibold text-3xl">95%</h3>
                <p className="text-gray-500">Tingkat kelulusan</p>
              </div>
              <div>
                <h3 className="font-semibold text-3xl">88%</h3>
                <p className="text-gray-500">Langsung bekerja</p>
              </div>
            </div>
          </div>

          {/* Gambar */}
          <div className="md:w-1/2">
            <img
              src="/public/test1.png"
              alt="SMK AK Nusa Bangsa"
              className="rounded-lg shadow-lg w-full max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="flex justify-center items-end bg-[#f7f7f7] gap-19">
        <div className="md:w-1/2 mr-12 my-53">
            <img
              src="/public/test1.png"
              alt="SMK AK Nusa Bangsa"
              className="rounded-lg shadow-lg w-full max-h-[400px] object-cover"
            />
          </div>
         <div className="w-full max-w-2xl flex flex-col items-center">
          <span className="bg-[#a63c32] text-white px-6 py-2 rounded-full font-semibold mb-6 md:mb-4 text-base md:text-lg">
            Tentang kami
          </span>
          <h2 className="font-bold text-4xl md:text-5xl text-justify mb-4 leading-tight">
            SMK Unggulan dengan
            <br />
            Kompetensi Tinggi
          </h2>
          <p className="text-[#a63c32] text-lg text-left leading-tight max-w-xl mb-8">
            SMK AK Nusa Bangsa adalah sekolah yang telah mencetak ribuan lulusan
            yang kompeten di bidang teknologi, kimia, dan farmasi. Kami
            berkomitmen untuk memberikan siswa langsung terjun ke dunia kerja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl justify-end">
            {tentangKamiCards.map((card, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 bg-white shadow-md flex flex-col items-start min-h-[120px]"
              >
                <span className="mb-2 text-2xl">{card.icon}</span>
                <span className="font-semibold text-base">{card.title}</span>
                <p className="text-gray-700 text-sm mt-1">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export default Hero;

