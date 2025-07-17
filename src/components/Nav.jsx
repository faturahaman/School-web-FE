import aknb from "/aknb_logo.png";
import { useState } from "react";
import { AlignJustify } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex md:justify-evenly justify-around flex-shrink-0 items-center h-15 bg-[#e63946] text-white rounded-b-lg shadow-md">
      {/* logo */}
      <div className="flex gap-3 items-center">
        <img src={aknb} alt="" className="h-8 w-auto cursor-pointer" />
        <h1 className="font-bold md:text-xl">SMK AK Nusa Bangsa</h1>
      </div>

      {/* link */}
      <div>
        <ul className="md:flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-2 mt-4 md:mt-0">
          {[
            { href: "/", label: "Beranda" },
            { href: "/about", label: "Tentang" },
            { href: "/contact", label: "Program" },
            { href: "/berita", label: "Berita" },
            { href: "/galeri", label: "Galeri" },
            { href: "/kontak", label: "Kontak" },
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href} className="group relative w-max text-white">
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* daftar sekarang */}
      <div className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black rounded group py-1.5 px-2.5">
        <span className="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <a
          href="/daftar"
          className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black font-bold"
        >
          Daftar sekarang
        </a>
      </div>

      {/* mobile */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify />
      </button>
    </nav>
  );
}

export default Nav;
