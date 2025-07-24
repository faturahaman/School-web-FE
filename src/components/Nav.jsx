import aknb from "/aknb_logo.png";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const customStyles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slide-down {
    animation: slideDown 0.3s ease-out;
    will-change: transform, opacity;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.4s ease-out both;
    will-change: transform, opacity;
  }
`;

const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Program" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

const NavItem = ({ href, label, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="group relative w-max inline-block"
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

const MobileNavItem = ({ href, label, onClick, isButton = false }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`block px-4 py-2 transition-colors duration-200 ${
        isButton 
          ? 'bg-black text-white rounded-md mx-4 text-center font-bold hover:bg-gray-800' 
          : 'hover:underline'
      }`}
    >
      {label}
    </a>
  </li>
);

const AnimatedMenuButton = ({ isOpen, onClick }) => (
  <button
    className="md:hidden ml-4 p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <div className="w-6 h-5 flex flex-col justify-between items-center relative">
      {/* atas */}
      <span 
        className={`block h-0.5 w-6 bg-white will-change-transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      
      {/* tengah */}
      <span 
        className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      
      {/* bawah */}
      <span 
        className={`block h-0.5 w-6 bg-white will-change-transform transition-transform duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </div>
  </button>
);

const RegisterButton = () => (
  <div className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black rounded group py-1.5 px-2.5 text-sm md:text-base">
    <span className="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <a
      href="/daftar"
      className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black font-bold"
    >
      Daftar sekarang
    </a>
  </div>
);

import { useEffect } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <style>{customStyles}</style>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex md:justify-evenly justify-around flex-shrink-0 items-center h-15 bg-[#e63946] text-white rounded-b-lg shadow-md px-4 py-3 transition-all duration-300 ${isScrolled ? "bg-opacity-80" : "bg-opacity-100"}`}
        style={{ backgroundColor: isScrolled ? "#e63946cc" : "#e63946" }}
      >
        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          <img 
            src={aknb} 
            alt="Logo AKNB" 
            className="h-8 w-auto cursor-pointer" 
          />
          <h1 className="font-bold md:text-xl text-base">
            SMK AK Nusa Bangsa
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0 text-sm md:text-base">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </ul>
        </div>

        {/* Register Button - Desktop Only */}
        <div className="hidden md:block">
          <RegisterButton />
        </div>
        <AnimatedMenuButton isOpen={isOpen} onClick={toggleMenu} />

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#e63946] shadow-md md:hidden z-50 animate-slide-down">
            <ul className="flex flex-col items-center py-2 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <div 
                  key={item.href}
                  className="animate-fade-in-up w-full flex justify-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MobileNavItem
                    href={item.href}
                    label={item.label}
                    onClick={closeMenu}
                  />
                </div>
              ))}
              {/* Register Button for Mobile */}
              <div 
                className="animate-fade-in-up w-full flex justify-center"
                style={{ animationDelay: `${NAV_ITEMS.length * 50}ms` }}
              >
                <MobileNavItem
                  href="/daftar"
                  label="Daftar Sekarang"
                  onClick={closeMenu}
                  isButton={true}
                />
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;