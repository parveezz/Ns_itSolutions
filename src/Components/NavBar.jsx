import { useState } from "react";
import { FaServer, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
        {/* Logo */}
        <a href="#about" onClick={closeMenu} className="flex items-center gap-2.5 group">
          <div className="bg-brand-brown text-brand-orange p-2 rounded-lg group-hover:scale-105 transition-transform">
            <FaServer className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-brand-brown">
              NS IT SOLUTIONS<sup className="text-[10px] text-brand-orange ml-0.5">®</sup>
            </span>
            <span className="block text-[10px] text-gray-500 font-medium leading-none">
              Cables & Smart Software
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-navy">
          <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
          <a href="#cables" className="hover:text-brand-orange transition-colors">Cables</a>
          <a href="#software" className="hover:text-brand-orange transition-colors">Software</a>
          <a href="#simulator" className="hover:text-brand-orange transition-colors">Demo</a>
          <a href="#download" className="hover:text-brand-orange transition-colors">Downloads</a>
          <button
            type="button"
            onClick={onOpenQuote}
            className="bg-brand-orange text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-sm cursor-pointer"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenQuote}
            className="bg-brand-orange text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Quote
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-brown hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <div className="flex flex-col gap-3.5 text-sm font-semibold text-brand-navy">
            <a href="#about" onClick={closeMenu} className="py-1 hover:text-brand-orange">About</a>
            <a href="#cables" onClick={closeMenu} className="py-1 hover:text-brand-orange">Cables</a>
            <a href="#software" onClick={closeMenu} className="py-1 hover:text-brand-orange">Software</a>
            <a href="#simulator" onClick={closeMenu} className="py-1 hover:text-brand-orange">Demo</a>
            <a href="#download" onClick={closeMenu} className="py-1 hover:text-brand-orange">Downloads</a>
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenQuote();
              }}
              className="w-full bg-brand-orange text-white py-2.5 rounded-lg font-bold text-center hover:bg-orange-600 transition-colors mt-1 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}