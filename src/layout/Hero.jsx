import { GraduationCap, ArrowRight, Triangle } from "lucide-react";

function Hero() {
  return (
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
  );
}

export default Hero;
