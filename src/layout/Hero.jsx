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
      <section className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/public/sekolah.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-x-2 bg-red-600/80 px-3 py-2 md:px-4 rounded-full text-sm md:text-base mb-4">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <h3 className="text-sm md:text-lg font-medium text-white">SMK Analis Kimia terdepan!</h3>
              </div>

              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white">
                Mencetak <br className="hidden sm:block" /> 
                Tenaga Ahli <br className="hidden sm:block" />
                <span className="text-red-500">Profesional</span>
              </h1>

              <p className="text-gray-200 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
                SMK AK Nusa Bangsa adalah sekolah menengah kejuruan yang fokus pada pengembangan kompetensi siswa di bidang teknologi, kimia, dan farmasi untuk siap memasuki dunia kerja
              </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mb-8">
              <a
                href="/daftar"
                className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-5 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-sm md:text-base"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative top-[1px]" />
              </a>

              <a
                href="/tour"
                className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-5 py-3 rounded-lg hover:bg-white/20 transition duration-300 border border-white text-sm md:text-base backdrop-blur-sm"
              >
                <Triangle className="rotate-90 w-4 h-4 md:w-5 md:h-5" />
                Virtual Tour
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 md:gap-8 text-center max-w-sm mx-auto lg:mx-0">
              <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-white">500+</h3>
                <p className="text-gray-300 text-sm md:text-base">Siswa aktif</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-white">95%</h3>
                <p className="text-gray-300 text-sm md:text-base">Tingkat kelulusan</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-white">88%</h3>
                <p className="text-gray-300 text-sm md:text-base">Langsung bekerja</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
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
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <span className="bg-[#a63c32] text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
              Tentang kami
            </span>
            
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-gray-900">
              SMK Unggulan dengan
              <br className="hidden sm:block" />
              Kompetensi Tinggi
            </h2>
            
            <p className="text-[#a63c32] text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8">
              SMK AK Nusa Bangsa adalah sekolah yang telah mencetak ribuan lulusan
              yang kompeten di bidang teknologi, kimia, dan farmasi. Kami
              berkomitmen untuk memberikan siswa langsung terjun ke dunia kerja.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
              {tentangKamiCards.map((card, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 md:p-6 lg:p-7 bg-white shadow-md flex flex-col items-start min-h-[140px] md:min-h-[160px] hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="mb-3 text-2xl md:text-3xl">{card.icon}</span>
                  <span className="font-semibold text-base md:text-lg text-gray-900 mb-2">{card.title}</span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Hero;