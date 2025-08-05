import { Users, Clock, BookOpen, ArrowRight } from "lucide-react";

function ProgramKeahlianSection() {
  const programs = [
    {
      id: 1,
      title: "Pengembangan Perangkat Lunak dan Gim (PPLG)",
      description: "Program Keahlian yang di mempelajari pengembangan aplikasi, web, dan game development",
      students: "100 siswa",
      duration: "3 tahun",
      subjects: "Mata Pelajaran:",
      tags: [
        { name: "Pemrograman Web", color: "bg-blue-100 text-blue-800" },
        { name: "Database", color: "bg-green-100 text-green-800" },
        { name: "Game Development", color: "bg-purple-100 text-purple-800" }
      ],
      image: "/api/placeholder/280/200"
    },
    {
      id: 2,
      title: "Analis Kimia (AK)",
      description: "Program Keahlian yang fokus pada analisis dan pengujian bahan kimia untuk berbagai industri",
      students: "100 siswa",
      duration: "3 tahun",
      subjects: "Mata Pelajaran:",
      tags: [
        { name: "Kimia Analitik", color: "bg-red-100 text-red-800" },
        { name: "Instrumentasi", color: "bg-orange-100 text-orange-800" },
        { name: "Mikrobiologi", color: "bg-yellow-100 text-yellow-800" },
        { name: "Kontrol kualitas", color: "bg-pink-100 text-pink-800" }
      ],
      image: "/api/placeholder/280/200"
    },
    {
      id: 3,
      title: "Farmasi (FM)",
      description: "Program Keahlian yang mempelajari bidang farmasi untuk industri obat dan kesehatan",
      students: "100 siswa",
      duration: "3 tahun",
      subjects: "Mata Pelajaran:",
      tags: [
        { name: "Farmakologi", color: "bg-teal-100 text-teal-800" },
        { name: "Teknologi Farmasi", color: "bg-indigo-100 text-indigo-800" },
        { name: "Kimia Farmasi", color: "bg-cyan-100 text-cyan-800" },
        { name: "Formulasi", color: "bg-emerald-100 text-emerald-800" }
      ],
      image: "/api/placeholder/280/200"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Program Keahlian
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilih Jurusan Sesuai Minatmu
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Kami menawarkan tiga program keahlian unggulan yang dirancang untuk 
            mempersiapkan siswa menjadi tenaga kerja profesional yang siap bersaing di industri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-400 text-center">
                  <div className="text-6xl font-bold opacity-30 mb-2">INI FOTO</div>
                  <div className="text-2xl font-semibold opacity-50">JURUSAN</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{program.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{program.subjects}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Pelajari lebih lanjut
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramKeahlianSection;