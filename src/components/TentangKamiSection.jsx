import React from "react";

function TentangKamiSection({ cards }) {
  return (
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
        {cards.map((card, index) => (
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
  );
}

export default TentangKamiSection;
