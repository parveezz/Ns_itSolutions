import { FaServer } from "react-icons/fa";

export default function Navbar({ onOpenQuote }) {
    return (
        <header className="bg-white flex flex-col md:flex-row justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50">
            {/* Logo Area */}
            <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="bg-brand-brown text-brand-orange p-2.5 rounded-lg shadow-sm">
                    <FaServer className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-serif text-brand-brown tracking-wider font-bold leading-tight">
                        NS IT SOLUTIONS<sup className="text-xs text-brand-orange font-sans ml-0.5">®</sup>
                    </h1>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">
                        Enterprise IT Infrastructure & Hardware Solutions
                    </p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-brand-navy">
                <a href="#about" className="hover:text-brand-orange transition-colors">ABOUT US</a>
                <a href="#services" className="hover:text-brand-orange transition-colors">SERVICES</a>
                <a href="#download" className="hover:text-brand-orange transition-colors">DOWNLOADS</a>
                <a href="#career" className="hover:text-brand-orange transition-colors">CAREER</a>
                <a href="#contact" className="hover:text-brand-orange transition-colors">CONTACT</a>
                <button
                    type="button"
                    onClick={onOpenQuote}
                    className="bg-brand-orange text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600 transition-all shadow-sm cursor-pointer hover:shadow-md transform hover:-translate-y-0.5"
                >
                    GET A QUOTE
                </button>

            </nav>
        </header>
    );
}   