import aknb from "/aknb_logo.png";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex md:justify-evenly justify-around flex-shrink-0 items-center h-15 bg-[#e63946] text-white rounded-b-lg shadow-md px-4 py-3">
      <div className="flex gap-3 items-center">
        <img src={aknb} alt="Logo AKNB" className="h-8 w-auto cursor-pointer" />
        <h1 className="font-bold md:text-xl text-base">SMK AK Nusa Bangsa</h1>
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0 text-sm md:text-base">
          {[
            { href: "/", label: "Beranda" },
            { href: "/about", label: "Tentang" },
            { href: "/contact", label: "Program" },
            { href: "/berita", label: "Berita" },
            { href: "/galeri", label: "Galeri" },
            { href: "/kontak", label: "Kontak" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative w-max inline-block"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black rounded group py-1.5 px-2.5 text-sm md:text-base">
        <span className="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <a
          href="/daftar"
          className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black font-bold"
        >
          Daftar sekarang
        </a>
      </div>

      <button
        className="md:hidden ml-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <AlignJustify />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#e63946] shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center py-2 space-y-2">
            {[
              { href: "/", label: "Beranda" },
              { href: "/about", label: "Tentang" },
              { href: "/contact", label: "Program" },
              { href: "/berita", label: "Berita" },
              { href: "/galeri", label: "Galeri" },
              { href: "/kontak", label: "Kontak" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-2 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
